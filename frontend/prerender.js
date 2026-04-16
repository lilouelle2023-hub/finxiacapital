const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');

// Force prerendering to run (removed auto-skip for CI environments)
// If Puppeteer fails, the build will fail visibly so we can fix it
const ENABLE_PRERENDERING = process.env.SKIP_PRERENDERING !== 'true';

if (!ENABLE_PRERENDERING) {
  console.log('⚠️  Prerendering explicitly skipped via SKIP_PRERENDERING=true');
  process.exit(0);
}

console.log('🚀 Starting prerendering (production mode enabled)...\n');

const puppeteer = require('puppeteer');

// Routes à pré-rendre
const routes = [
  '/',
  '/about',
  '/strategies',
  '/governance',
  '/european-approach',
  '/investors',
  '/contact'
];

const BUILD_DIR = path.join(__dirname, 'build');
const PORT = 5000;

// Serveur statique simple avec Express
function createServer() {
  const express = require('express');
  const app = express();
  
  // Serve static files
  app.use(express.static(BUILD_DIR));
  
  // SPA fallback - serve index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
  });
  
  return app.listen(PORT);
}

async function prerender() {
  console.log('🚀 Starting prerendering...\n');

  // Démarrer le serveur
  const server = createServer();
  console.log(`✓ Static server running on http://localhost:${PORT}\n`);

  // Lancer Puppeteer avec options pour environnement containerisé
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-extensions',
      '--single-process',
      '--no-zygote'
    ],
    timeout: 60000
  });

  console.log('✓ Browser launched successfully\n');

  try {
    for (const route of routes) {
      console.log(`📄 Prerendering: ${route}`);
      
      const page = await browser.newPage();
      
      // Set a reasonable viewport
      await page.setViewport({ width: 1920, height: 1080 });
      
      const url = `http://localhost:${PORT}${route}`;
      
      try {
        // Charger la page avec timeout généreux
        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 45000
        });

        // Attendre que React rende le contenu
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Vérifier que le contenu est chargé
        const hasContent = await page.evaluate(() => {
          const root = document.getElementById('root');
          return root && root.children.length > 0 && root.textContent.length > 100;
        });
        
        if (!hasContent) {
          console.log(`  ⚠️  Warning: Content may not be fully loaded for ${route}`);
        }
        
        // Obtenir le HTML complet
        const html = await page.content();
        
        // Vérifier que le HTML contient du contenu React (pas juste le noscript)
        if (html.includes('You need to enable JavaScript to run this app') && 
            !html.includes('Build in the real world')) {
          console.log(`  ⚠️  Warning: HTML appears to be un-rendered for ${route}`);
        }
        
        // Déterminer le chemin du fichier
        let filePath;
        if (route === '/') {
          filePath = path.join(BUILD_DIR, 'index.html');
        } else {
          const dir = path.join(BUILD_DIR, route);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          filePath = path.join(dir, 'index.html');
        }
        
        // Écrire le fichier HTML pré-rendu
        fs.writeFileSync(filePath, html);
        
        const fileSize = (fs.statSync(filePath).size / 1024).toFixed(2);
        console.log(`  ✓ Saved to: ${filePath} (${fileSize} KB)\n`);
        
      } catch (error) {
        console.error(`  ❌ Error rendering ${route}:`, error.message);
        throw error; // Re-throw to fail the build
      } finally {
        await page.close();
      }
    }

    console.log('✅ Prerendering complete!\n');
    console.log(`📊 Generated ${routes.length} static HTML pages\n`);
    
  } catch (error) {
    console.error('❌ Error during prerendering:', error);
    throw error; // Fail the build if prerendering fails
  } finally {
    await browser.close();
    server.close();
  }
}

prerender();

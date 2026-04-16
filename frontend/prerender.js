const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const http = require('http');
const handler = require('serve-handler');

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

// Serveur statique pour les fichiers build
function createServer() {
  return http.createServer((request, response) => {
    return handler(request, response, {
      public: BUILD_DIR,
      cleanUrls: false
    });
  });
}

async function prerender() {
  console.log('🚀 Starting prerendering...\n');

  // Démarrer le serveur
  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`✓ Static server running on http://localhost:${PORT}\n`);

  // Lancer Puppeteer
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    for (const route of routes) {
      console.log(`📄 Prerendering: ${route}`);
      
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;
      
      // Charger la page et attendre que React finisse le rendu
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Attendre un peu pour que React hydrate
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Vérifier que le contenu est chargé (chercher #root avec du contenu)
      try {
        await page.waitForFunction(
          () => {
            const root = document.getElementById('root');
            return root && root.children.length > 0 && root.textContent.length > 100;
          },
          { timeout: 10000 }
        );
      } catch (e) {
        console.log(`  ⚠ Warning: Content check timed out, proceeding anyway...`);
      }
      
      // Obtenir le HTML complet
      const html = await page.content();
      
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
      console.log(`  ✓ Saved to: ${filePath}\n`);
      
      await page.close();
    }

    console.log('✅ Prerendering complete!\n');
    console.log(`📊 Generated ${routes.length} static HTML pages\n`);
    
  } catch (error) {
    console.error('❌ Error during prerendering:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }
}

prerender();

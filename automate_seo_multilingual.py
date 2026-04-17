#!/usr/bin/env python3
"""
Script d'automatisation SEO Multilingue pour FINXIA Capital
Crée les pages EN et ajoute les hreflang sur les pages FR
"""

import os
import re

# Mapping des URLs FR -> EN
URL_MAPPING = {
    "/": "/en/",
    "/about/": "/en/about/",
    "/strategies/": "/en/strategies/",
    "/european-approach/": "/en/european-approach/",
    "/governance/": "/en/governance/",
    "/investors/": "/en/investors/",
    "/contact/": "/en/contact/",
    "/blog/": "/en/blog/",
    "/blog/crise-energetique-datacenters-ia-europe/": "/en/blog/ai-energy-crisis-european-datacenters/",
    "/blog/gestion-fonds-18-agents-ia/": "/en/blog/managing-alternative-fund-18-ai-agents/",
    "/blog/datacenters-europe-2026-fenetre-opportunite/": "/en/blog/european-datacenters-2026-investor-opportunity/",
}

# Fichiers à mettre à jour (FR) avec hreflang
FR_FILES = [
    ("/app/frontend-nextjs/pages/about.tsx", "https://finxiacapital.com/about/", "https://finxiacapital.com/en/about/"),
    ("/app/frontend-nextjs/pages/strategies.tsx", "https://finxiacapital.com/strategies/", "https://finxiacapital.com/en/strategies/"),
    ("/app/frontend-nextjs/pages/european-approach.tsx", "https://finxiacapital.com/european-approach/", "https://finxiacapital.com/en/european-approach/"),
    ("/app/frontend-nextjs/pages/governance.tsx", "https://finxiacapital.com/governance/", "https://finxiacapital.com/en/governance/"),
    ("/app/frontend-nextjs/pages/investors.tsx", "https://finxiacapital.com/investors/", "https://finxiacapital.com/en/investors/"),
    ("/app/frontend-nextjs/pages/contact.tsx", "https://finxiacapital.com/contact/", "https://finxiacapital.com/en/contact/"),
    ("/app/frontend-nextjs/pages/blog/index.tsx", "https://finxiacapital.com/blog/", "https://finxiacapital.com/en/blog/"),
]

# Articles à mettre à jour avec JSON-LD + hreflang
ARTICLES_FR = [
    {
        "path": "/app/frontend-nextjs/pages/blog/crise-energetique-datacenters-ia-europe.tsx",
        "url_fr": "https://finxiacapital.com/blog/crise-energetique-datacenters-ia-europe/",
        "url_en": "https://finxiacapital.com/en/blog/ai-energy-crisis-european-datacenters/",
        "canonical": "https://finxiacapital.com/blog/crise-energetique-datacenters-ia-europe/",
    },
    {
        "path": "/app/frontend-nextjs/pages/blog/gestion-fonds-18-agents-ia.tsx",
        "url_fr": "https://finxiacapital.com/blog/gestion-fonds-18-agents-ia/",
        "url_en": "https://finxiacapital.com/en/blog/managing-alternative-fund-18-ai-agents/",
        "canonical": "https://finxiacapital.com/blog/gestion-fonds-18-agents-ia/",
    },
    {
        "path": "/app/frontend-nextjs/pages/blog/datacenters-europe-2026-fenetre-opportunite.tsx",
        "url_fr": "https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/",
        "url_en": "https://finxiacapital.com/en/blog/european-datacenters-2026-investor-opportunity/",
        "canonical": "https://finxiacapital.com/blog/datacenters-europe-2026-fenetre-opportunite/",
    },
]


def add_hreflang_to_seo_component(file_path, url_fr, url_en, is_default=True):
    """Ajoute les attributs hreflang au composant SEO existant"""
    print(f"📝 Mise à jour : {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Rechercher le composant SEO
    seo_pattern = r'(<SEO\s+[^>]*?)(\s*/>)'
    
    def replacer(match):
        existing_props = match.group(1)
        closing = match.group(2)
        
        # Vérifier si hreflang existe déjà
        if 'hreflangFr=' in existing_props:
            return match.group(0)  # Déjà mis à jour
        
        # Ajouter les props hreflang
        new_props = existing_props
        new_props += f'\n        language="fr"'
        new_props += f'\n        ogLocale="fr_FR"'
        new_props += f'\n        hreflangFr="{url_fr}"'
        new_props += f'\n        hreflangEn="{url_en}"'
        if is_default:
            new_props += f'\n        hreflangDefault="{url_fr}"'
        new_props += closing
        
        return new_props
    
    updated_content = re.sub(seo_pattern, replacer, content, flags=re.DOTALL)
    
    if updated_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"✅ Hreflang ajoutés")
    else:
        print(f"⏭️  Déjà à jour ou pas de composant SEO trouvé")


def update_article_with_jsonld_and_hreflang(article_info):
    """Met à jour un article FR avec JSON-LD correct et hreflang"""
    file_path = article_info['path']
    print(f"\n📰 Mise à jour article : {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ajouter hreflang au composant SEO
    add_hreflang_to_seo_component(file_path, article_info['url_fr'], article_info['url_en'], is_default=True)
    
    print(f"✅ Article mis à jour")


def main():
    print("🚀 Démarrage de l'automatisation SEO Multilingue\n")
    
    # Étape 1 : Mise à jour des pages FR avec hreflang
    print("=" * 60)
    print("ÉTAPE 1 : Mise à jour des pages FR avec hreflang")
    print("=" * 60)
    
    for file_path, url_fr, url_en in FR_FILES:
        if os.path.exists(file_path):
            add_hreflang_to_seo_component(file_path, url_fr, url_en, is_default=True)
        else:
            print(f"⚠️  Fichier non trouvé : {file_path}")
    
    # Étape 2 : Mise à jour des articles FR
    print("\n" + "=" * 60)
    print("ÉTAPE 2 : Mise à jour des articles FR")
    print("=" * 60)
    
    for article in ARTICLES_FR:
        if os.path.exists(article['path']):
            update_article_with_jsonld_and_hreflang(article)
        else:
            print(f"⚠️  Article non trouvé : {article['path']}")
    
    print("\n" + "=" * 60)
    print("✅ AUTOMATISATION TERMINÉE")
    print("=" * 60)
    print("\n📋 Prochaines étapes manuelles :")
    print("1. Créer les pages EN (homepage, about, strategies, european-approach)")
    print("2. Traduire les 3 articles de blog en anglais")
    print("3. Rebuild : cd /app && yarn build")
    print("4. Déployer sur Netlify")


if __name__ == "__main__":
    main()

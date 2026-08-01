# Bing Webmaster Tools — Instructions de soumission

## Statut actuel

❌ **Le ping automatique Bing est obsolète** — L'endpoint `https://www.bing.com/webmaster/ping.aspx` retourne HTTP 410 Gone (service supprimé par Microsoft).

## Méthode actuelle (manuelle)

**URL :** https://www.bing.com/webmasters

**Étapes :**
1. Se connecter avec un compte Microsoft (ou créer un compte si nécessaire)
2. Ajouter la propriété `finxiacapital.com`
3. Choisir la méthode de vérification :
   - **Méthode recommandée :** Vérification DNS (ajouter un enregistrement TXT dans la configuration DNS du domaine)
   - Alternative : Vérification par fichier HTML (télécharger un fichier fourni par Bing et le placer dans `/public/`)
4. Une fois vérifié, soumettre le sitemap : `https://finxiacapital.com/sitemap.xml`

## Vérification via fichier HTML (si DNS non accessible)

Si vous n'avez pas accès à la gestion DNS du domaine, voici la méthode alternative :

1. Bing fournira un fichier nommé `BingSiteAuth.xml` (ou similaire)
2. Placer ce fichier dans `/frontend-nextjs/public/BingSiteAuth.xml`
3. Commit et push sur `main`
4. Attendre le déploiement Netlify (~2 min)
5. Cliquer "Vérifier" dans Bing Webmaster Tools

## Après vérification

1. Aller dans **Sitemaps** > **Submit Sitemap**
2. Entrer : `https://finxiacapital.com/sitemap.xml`
3. Soumettre

## Vérification du statut

Après soumission, Bing affichera :
- Nombre d'URLs découvertes
- Nombre d'URLs indexées
- Erreurs éventuelles

**Délai d'indexation :** 1-4 semaines pour une nouvelle propriété

---

## Note importante

Le site est déjà accessible par Bingbot (robots.txt whitelisté). La soumission Webmaster Tools accélère l'indexation mais n'est pas strictement nécessaire — Bing découvrira le site naturellement via les liens entrants.

**Priorité :** Moyenne (Search Console Google est déjà active et est le moteur principal de trafic)

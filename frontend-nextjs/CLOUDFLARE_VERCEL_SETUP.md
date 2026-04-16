# 🌐 Configuration Cloudflare + Vercel - FINXIA Capital

## Prérequis
- ✅ Domaine `finxiacapital.com` sur Cloudflare
- ✅ Site déployé sur Vercel (après upload du ZIP)

---

## 📋 Étapes de Configuration DNS

### **1. Obtenez les DNS Vercel**

Après déploiement sur Vercel :

1. Allez dans votre projet Vercel
2. **Settings** → **Domains**
3. Cliquez sur **"Add Domain"**
4. Entrez : `finxiacapital.com`
5. Vercel vous donnera les enregistrements DNS à configurer

**Exemple de valeurs Vercel (vos valeurs seront différentes)** :
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### **2. Configurez Cloudflare DNS**

1. **Allez sur** : https://dash.cloudflare.com
2. **Sélectionnez** : `finxiacapital.com`
3. **Cliquez sur** : **DNS** (menu gauche)

#### **Ajouter le Record A (pour `finxiacapital.com`)** :
```
Type: A
Name: @ (ou finxiacapital.com)
IPv4 address: [IP fournie par Vercel]
Proxy status: ⚠️ DÉSACTIVÉ (cliquez sur le nuage orange pour le griser)
TTL: Auto
```

**⚠️ IMPORTANT** : Désactivez le proxy Cloudflare (nuage gris) initialement pour la configuration.

#### **Ajouter le Record CNAME (pour `www.finxiacapital.com`)** :
```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: ⚠️ DÉSACTIVÉ (nuage gris)
TTL: Auto
```

#### **Si vous avez déjà des enregistrements** :
- Supprimez les anciens records A et CNAME pour `@` et `www`
- OU mettez-les à jour avec les nouvelles valeurs Vercel

---

### **3. Vérification dans Vercel**

Retournez dans Vercel → **Domains** :
- Vercel va détecter automatiquement la configuration DNS
- Attendez 5-10 minutes (propagation DNS)
- Vercel affichera ✅ **"Valid Configuration"**
- Certificat SSL/TLS sera généré automatiquement par Vercel

---

### **4. Configuration SSL/TLS Cloudflare (Important)**

1. Dans Cloudflare : **SSL/TLS** → **Overview**
2. Sélectionnez : **"Full"** ou **"Full (strict)"** (recommandé)
   - ❌ PAS "Flexible" (causerait des boucles de redirection)

3. **SSL/TLS** → **Edge Certificates** :
   - ✅ Activez "Always Use HTTPS"
   - ✅ Activez "Automatic HTTPS Rewrites"

---

### **5. Réactivez le Proxy Cloudflare (Optionnel)**

Une fois que tout fonctionne :

1. Retournez dans **DNS** Cloudflare
2. Cliquez sur les enregistrements A et CNAME
3. Activez le proxy (nuage orange) pour :
   - ✅ Protection DDoS Cloudflare
   - ✅ Cache CDN Cloudflare
   - ✅ Analyse trafic

**Note** : Le proxy Cloudflare peut ajouter une légère latence initiale mais améliore la sécurité.

---

### **6. Redirection www → apex (Optionnel)**

Si vous voulez que `www.finxiacapital.com` redirige vers `finxiacapital.com` (ou vice-versa) :

1. Cloudflare : **Rules** → **Page Rules**
2. Créez une règle :
   ```
   URL: www.finxiacapital.com/*
   Setting: Forwarding URL (301 - Permanent Redirect)
   Destination: https://finxiacapital.com/$1
   ```

**OU** laissez Vercel gérer cela automatiquement (recommandé).

---

## ✅ Vérification Finale

### **Test DNS** :
```bash
# Vérifiez que DNS pointe vers Vercel
dig finxiacapital.com +short
# Devrait afficher l'IP Vercel

dig www.finxiacapital.com +short
# Devrait afficher cname.vercel-dns.com
```

### **Test Site** :
```bash
# Vérifiez que le site charge
curl -I https://finxiacapital.com
# Devrait retourner 200 OK

# Vérifiez l'indexabilité
curl https://finxiacapital.com | grep "Build in the real world"
# Devrait retourner le texte
```

---

## 📧 Email Configuration (Bonus)

Puisque vous voulez `contact@finxiacapital.com`, voici les options :

### **Option 1 : Cloudflare Email Routing (Gratuit)**
1. Cloudflare : **Email** → **Email Routing**
2. Activez Email Routing
3. Ajoutez : `contact@finxiacapital.com` → votre Gmail
4. Verifiez votre Gmail
5. ✅ Vous recevrez les emails sur Gmail

**Pour ENVOYER depuis Gmail** :
1. Gmail → **Paramètres** → **Comptes et importation**
2. **Envoyer en tant que** → Ajouter `contact@finxiacapital.com`
3. Serveur SMTP : `smtp.gmail.com`
4. Port : 587 (TLS)
5. Utilisez votre Gmail + mot de passe application

### **Option 2 : Google Workspace (Payant - ~6€/mois)**
- Email professionnel complet
- Plus fiable pour l'envoi
- Interface Gmail native

---

## 🆘 Problèmes Courants

### **Erreur "DNS_PROBE_FINISHED_NXDOMAIN"**
- Attendez 24-48h pour propagation DNS complète
- Vérifiez que les records sont corrects dans Cloudflare

### **Erreur SSL/TLS "Too many redirects"**
- Changez SSL/TLS Cloudflare de "Flexible" à "Full"

### **Site ne charge pas**
- Vérifiez que proxy Cloudflare est désactivé (nuage gris) temporairement
- Vérifiez que Vercel a bien validé le domaine

---

## ⏱️ Timeline

- **Déploiement Vercel** : 2-3 minutes
- **Configuration DNS** : 5 minutes
- **Propagation DNS** : 5 minutes - 24 heures (généralement 10-30 min)
- **Certificat SSL** : Automatique (1-2 minutes après DNS valide)

---

**Vous êtes prêt ! 🚀 Une fois déployé sur Vercel, suivez ce guide pour connecter votre domaine Cloudflare.**

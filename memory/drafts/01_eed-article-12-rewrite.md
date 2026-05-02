# DRAFT 1 — Article EED Article 12 (réécriture)

**URL :** `/blog/eed-article-12-declaration-datacenter-guide-2026/`
**Auteure :** Lila Benhammou, Co-Fondatrice & CIO — FINXIA Capital
**Date :** 15 avril 2026 (préservé)
**Read time :** 12 min de lecture (mise à jour)
**Mots cible :** 2 500+
**Schema ajouté :** FAQPage JSON-LD (8 Q&A)

---

## Intro (lead paragraph)

Le 15 mai 2026 marque la première échéance de déclaration obligatoire imposée par l'Article 12 de la Directive européenne sur l'efficacité énergétique (EED 2023/1791, refonte). Tout datacenter dépassant **500 kW de puissance IT installée** sur le territoire de l'Union européenne doit transmettre, via la base européenne centralisée, cinq indicateurs de performance énergétique — sous peine de sanctions nationales allant de l'amende administrative à la suspension d'exploitation selon les transpositions locales.

Cette échéance n'est pas un exercice bureaucratique. Elle constitue le point de bascule réglementaire du marché européen des datacenters : elle crée la base de données publique qui alimentera l'application de l'Article 21 (seuils PUE contraignants au 2 janvier 2027), conditionne l'éligibilité à l'EU Taxonomy 8.1 pour les financements Green Bond, et trie mécaniquement le parc européen entre actifs conformes (premium de valorisation) et actifs non conformes (décote immédiate).

Ce guide couvre le périmètre exact de l'obligation, les cinq indicateurs techniques à déclarer, la méthodologie de préparation en 90 jours, l'articulation avec l'Article 21, les sanctions encourues et répond aux 8 questions les plus fréquentes des opérateurs.

---

## H2 — 1. Qu'est-ce que l'Article 12 de la Directive EED ?

L'Article 12 de la Directive (UE) 2023/1791 — refonte de la Directive Efficacité Énergétique adoptée le 13 septembre 2023 et entrée en vigueur le 10 octobre 2023 — impose pour la première fois dans l'histoire du droit communautaire une obligation de déclaration annuelle harmonisée à l'ensemble des opérateurs de datacenters dépassant un certain seuil de puissance.

L'objectif affiché par la Commission européenne est triple : (1) créer la première base de données publique européenne sur la consommation énergétique réelle des datacenters, segment qui représente désormais près de 3% de la consommation électrique de l'UE et croît de 10% par an sous l'effet de la demande IA ; (2) doter les régulateurs nationaux et européens d'un outil de pilotage fin pour ajuster les politiques de décarbonation ; (3) créer un mécanisme de transparence qui force les opérateurs à mesurer, documenter et améliorer leurs performances — le simple fait de devoir déclarer induit une dynamique d'optimisation.

L'Article 12 a été complété par le Règlement délégué (UE) 2024/1364 du 14 mars 2024, qui précise le format de déclaration, la méthodologie de calcul des indicateurs, et le calendrier de remontée des données. La première échéance du 15 mai 2026 portera sur les données consolidées de l'exercice 2025 complet (1er janvier — 31 décembre 2025). Les déclarations suivantes devront être remises avant le 15 mai de chaque année, couvrant l'exercice N-1.

La Commission a précisé que la base de données publique ne sera accessible qu'à partir de 2027 dans sa version agrégée — les données individuelles des opérateurs resteront confidentielles pour les deux premières années, le temps que le parc se stabilise. Mais cette confidentialité est temporaire : à partir de 2028, les indicateurs par site seront publiés, créant de facto un classement public des datacenters européens par efficacité énergétique.

---

## H2 — 2. Qui est concerné — seuils et périmètre exact

L'obligation de déclaration s'applique à tout **datacenter** au sens de la Directive — défini comme une « structure, ou un groupe de structures, dédiée au stockage, traitement et transport centralisés des données, accompagnée des équipements et infrastructures d'alimentation et de contrôle environnemental » — dont la **puissance IT installée excède 500 kW**.

Le seuil de 500 kW fait référence à la puissance électrique nominale des équipements IT (serveurs, stockage, équipements réseau) — et non à la puissance totale du site incluant le refroidissement et les auxiliaires. Cette distinction est cruciale : un datacenter affichant une puissance site de 1,2 MW avec un PUE de 1,8 aura une puissance IT de ~667 kW et sera donc concerné ; un site de 1 MW avec un PUE de 2,2 n'aura que ~454 kW IT et sera hors scope (mais rentrera dans le périmètre dès qu'il dépassera 500 kW IT, ce qui arrive généralement avec la croissance naturelle des workloads).

Sont également concernés :
- Les **colocations multi-tenants** dépassant 500 kW au niveau du site, même si aucun tenant individuel ne dépasse ce seuil
- Les **datacenters d'entreprise** (enterprise DC), y compris captifs et non destinés à la vente de services externes
- Les **datacenters hyperscalers** (AWS, Azure, Google Cloud, OVH, Scaleway) sans exception
- Les **salles informatiques industrielles** (par exemple en usine) dès lors qu'elles sont dédiées au traitement centralisé et dépassent le seuil

Sont exclus du périmètre :
- Les salles serveurs de bureaux (distribution décentralisée, usage local) en dessous de 500 kW
- Les infrastructures IT embarquées (télécoms mobiles, edge computing distribué) sans centralisation
- Les infrastructures classifiées relevant de la sécurité nationale (décision discrétionnaire des États membres)

Pour la France, l'organe collecteur sera l'**ADEME** (Agence de la Transition Écologique) via une plateforme dédiée qui sera mise en ligne d'ici fin mars 2026. Le portail national reprendra les indicateurs harmonisés de l'UE et transmettra automatiquement les données consolidées à la base européenne gérée par le JRC (Joint Research Centre de la Commission).

---

## H2 — 3. Les 5 indicateurs à déclarer avant le 15 mai 2026

Le Règlement délégué 2024/1364 définit précisément les cinq indicateurs obligatoires. Chaque indicateur doit être calculé sur l'exercice 2025 complet, avec les valeurs annualisées.

**Indicateur 1 — Consommation énergétique totale (kWh/an)**
Énergie électrique totale consommée par le site sur l'exercice de déclaration, mesurée au point de livraison réseau. Inclut IT, refroidissement, alimentation (pertes UPS + TGBT), auxiliaires, éclairage, bureaux associés. Méthode de mesure : relevé direct des compteurs du fournisseur d'énergie ou compteurs dédiés certifiés MID.

**Indicateur 2 — PUE (Power Usage Effectiveness)**
Rapport entre la consommation énergétique totale du datacenter et la consommation des équipements IT seuls (PUE = E_totale / E_IT). Valeur moyenne pondérée sur 12 mois. La méthode de mesure doit respecter la norme **ISO/IEC 30134-2:2016** (mesure au point de livraison, exclusion des équipements non-datacenter, période d'observation complète).

**Indicateur 3 — WUE (Water Usage Effectiveness)**
Rapport entre la consommation d'eau annuelle du site (m³) et la consommation énergétique IT (kWh), exprimé en L/kWh. Inclut eau de refroidissement (circuits ouverts, tours aéroréfrigérantes, adiabatique), eau sanitaire, eau de process. Les sites sans consommation d'eau (free cooling sec, refroidissement liquide en boucle fermée) déclarent WUE = 0.

**Indicateur 4 — REF (Renewable Energy Factor)**
Part de l'énergie consommée d'origine renouvelable certifiée, exprimée en pourcentage. La certification repose sur les **Garanties d'Origine (GO)** émises conformément à la Directive 2018/2001. Les PPA (Power Purchase Agreements) renouvelables sont valides s'ils satisfont aux critères de supplementarity définis par la Commission.

**Indicateur 5 — Récupération de chaleur (ERF — Energy Reuse Factor)**
Quantité de chaleur fatale récupérée et valorisée hors du datacenter (réseaux de chaleur urbains, industriels, serres, piscines), divisée par la consommation énergétique IT. Les sites n'ayant aucune récupération déclarent ERF = 0. Ce paramètre deviendra central à partir de 2030 lorsque les sites neufs devront atteindre un ERF minimum dans certains États membres.

À ces cinq indicateurs s'ajoutent des **métadonnées descriptives** : localisation GPS, puissance IT installée, nombre de baies, superficie, année de mise en service, fournisseur d'énergie, certifications environnementales détenues (ISO 50001, LEED, BREEAM).

---

## H2 — 4. Comment préparer sa déclaration — guide étape par étape

La préparation d'une déclaration EED conforme requiert entre 60 et 120 jours selon la maturité de l'opérateur. Ci-dessous, un plan en 4 phases pour les opérateurs partant d'une base non instrumentée.

**Phase 1 (J0 à J30) — Cartographie et instrumentation**
Inventaire des compteurs existants. Identification des points de mesure manquants pour atteindre une couverture PUE conforme ISO 30134-2 : compteur au point de livraison, sous-comptage IT (PDU, TGBT IT), mesure des auxiliaires (groupes froid, UPS, auxiliaires HVAC). Déploiement des compteurs manquants (comptage classe 1 requis pour PUE certifiable).

**Phase 2 (J30 à J60) — Collecte et fiabilisation des données historiques**
Récupération des données 2025 complètes via DCIM, BMS ou SCADA. Validation croisée avec les factures du fournisseur d'énergie. Correction des anomalies (coupures, périodes de maintenance, valeurs aberrantes). Production d'un jeu de données mensuel consolidé.

**Phase 3 (J60 à J90) — Calcul des indicateurs et rédaction du dossier**
Application des formules du Règlement délégué 2024/1364. Calcul du PUE annualisé (moyenne pondérée 12 mois). Calcul du WUE avec sources documentées. Vérification du REF via les certificats GO du fournisseur. Estimation ERF si applicable. Rédaction du rapport de déclaration au format attendu par l'ADEME (France) ou l'autorité compétente (autres États membres).

**Phase 4 (J90 à J120) — Vérification indépendante (recommandée)**
Bien que non obligatoire pour la première déclaration 2026, la vérification par un tiers accrédité (Bureau Veritas, TÜV Rheinland, SGS) sous protocole **IPMVP Option C** apporte une crédibilité commerciale forte et anticipe les exigences de l'Article 21 qui imposera des seuils contraignants. Les actifs vérifiés IPMVP bénéficient d'une prime de valorisation mesurée entre 8 et 15% sur le marché secondaire des datacenters en 2025 (source : CBRE Data Center Investor Intentions Survey).

Pour les opérateurs dont les datacenters sont déjà instrumentés via un DCIM professionnel (Schneider EcoStruxure IT, Vertiv Trellis, Nlyte), la préparation peut être bouclée en 30 à 45 jours.

---

## H2 — 5. Article 21 : ce qui arrive après la déclaration — PUE ≤ 1,30 au 2 janvier 2027

L'Article 12 n'est que le premier étage d'une architecture réglementaire à trois niveaux. L'Article 21 de la même Directive, qui entrera en application au **2 janvier 2027**, introduit des seuils contraignants de performance énergétique — basés précisément sur les données collectées via l'Article 12.

Les seuils retenus par la Commission sont :
- **PUE annualisé ≤ 1,30** pour tout datacenter existant mis en service avant 2027
- **PUE annualisé ≤ 1,20** pour tout datacenter neuf (permis de construire déposé après le 1er janvier 2027)
- **WUE maximal** : seuil national laissé à la discrétion des États membres, typiquement entre 0,4 et 1,8 L/kWh

Les datacenters non conformes devront présenter un plan de mise à niveau avec un calendrier de retour à la conformité sur 36 mois maximum. En cas d'incapacité à se conformer, les États membres pourront appliquer des pénalités croissantes, imposer des restrictions d'exploitation, voire refuser les autorisations d'extension ou de renouvellement.

Cette séquence Art. 12 → Art. 21 crée mécaniquement une bifurcation du marché en trois catégories :
- Les datacenters récents (post-2020) atteignant déjà des PUE entre 1,15 et 1,35 grâce au free cooling généralisé et aux architectures modulaires — conformes sans travaux lourds
- Les datacenters intermédiaires (2005-2020) affichant des PUE entre 1,40 et 1,70 — nécessitant des investissements de 500 à 2 500 €/kW IT pour passer sous la barre de 1,30
- Les datacenters anciens (pré-2005) avec PUE supérieurs à 1,70 — pour lesquels la rénovation est souvent non rentable économiquement, ouvrant la voie à des opportunités de repositionnement brownfield

C'est précisément cette troisième catégorie que **TITAN DC AI** cible en priorité : acquisition à décote des actifs brownfield non conformes, transformation technique complète, remise en conformité certifiée sous IPMVP, et repositionnement comme infrastructure premium certifiée EU Taxonomy 8.1.

---

## H2 — 6. Sanctions et risques en cas de non-conformité

L'Article 12 lui-même ne fixe pas de sanctions harmonisées — chaque État membre transpose et définit son régime. En France, le projet de transposition (avril 2026, loi de simplification économique intégrant les dispositions EED) prévoit :
- **Amende administrative** de 15 000 à 100 000 € pour défaut de déclaration initiale
- **Astreinte journalière** de 1 500 €/jour au-delà de 30 jours de retard
- **Publication des manquements** sur le portail ADEME (effet réputationnel direct)
- En cas de fausse déclaration avérée : sanctions pénales (article 441-1 du Code pénal) pouvant atteindre 3 ans de prison et 45 000 € d'amende

Au-delà des sanctions directes, le risque majeur est **réputationnel et commercial** : les grands donneurs d'ordre (hyperscalers pour leur colocation, administrations publiques via commande publique, grandes entreprises avec engagements ESG) intègrent désormais la conformité EED comme critère d'attribution. Un datacenter non déclaré au 15 mai 2026 est de facto disqualifié des appels d'offres cloud publics européens à partir de 2026.

Enfin, sur le plan du financement, les banques et fonds Green Bond appliquent des conditions suspensives à leurs instruments de dette verte : absence de déclaration EED = sortie du périmètre éligible à l'EU Taxonomy 8.1 = inéligibilité aux Green Bonds ICMA, avec refinancement potentiellement renchéri de 80 à 150 bps.

---

## H2 — 7. FAQ — 8 questions fréquentes des opérateurs de datacenters

**1. Mon datacenter fait 480 kW IT. Suis-je concerné ?**
Non, le seuil est strictement de 500 kW IT installée. Attention cependant à la trajectoire de croissance : dès que la puissance IT installée dépasse 500 kW (y compris temporairement pour un pic de charge documenté), l'obligation de déclaration s'applique sur l'exercice suivant complet.

**2. Est-ce que le PUE doit être certifié par un tiers ?**
Non, pas pour la déclaration Article 12. Une mesure interne conforme ISO/IEC 30134-2 est suffisante. Cependant, l'article 21 imposera à partir de 2027 une certification indépendante pour les sites cherchant une qualification PUE ≤ 1,30. Nous recommandons de passer dès 2026 en certification IPMVP Option C pour anticiper et sécuriser les exigences futures.

**3. Que se passe-t-il si je ne peux pas mesurer certains indicateurs ?**
Les indicateurs non mesurables doivent faire l'objet d'une estimation documentée (méthode de calcul, hypothèses, marge d'incertitude) conformément aux lignes directrices du JRC. Une déclaration avec estimation documentée est préférable à une absence de déclaration — les autorités tolèrent une marge d'erreur déclarée tant qu'elle reste sous 15%.

**4. Les colocations doivent-elles déclarer au niveau du site ou par tenant ?**
Déclaration au niveau du site (l'opérateur exploitant l'infrastructure physique), avec consolidation de l'ensemble des charges IT des tenants. Les tenants individuels n'ont aucune obligation de déclaration EED Article 12 — l'obligation pèse sur l'opérateur de colocation.

**5. Quelle est la différence entre les Garanties d'Origine et les PPA renouvelables pour le REF ?**
Les GO sont des certificats électroniques confirmant qu'un MWh a été produit d'origine renouvelable — elles peuvent être achetées séparément de l'énergie consommée. Les PPA renouvelables couplent contractuellement fourniture physique et certificats. Les deux sont recevables pour le REF, mais la Commission considère les PPA avec supplementarity comme qualitativement supérieurs (et cela pourrait devenir un critère différenciant à partir de 2028).

**6. Mon datacenter fonctionne en free cooling 100%. WUE = 0 est-il recevable ?**
Oui, strictement. Les sites en free cooling sec sans adiabatique déclarent WUE = 0 avec documentation technique du mode de refroidissement. Attention aux sites « free cooling avec assistance adiabatique en été » qui ont un WUE non nul, même faible (~0,05 à 0,15 L/kWh).

**7. Les données de mon DCIM suffisent-elles pour la déclaration ?**
Si votre DCIM est professionnel (Schneider EcoStruxure, Vertiv Trellis, Nlyte, Sunbird) et que vous disposez d'au moins 12 mois de données fiables, les rapports standards couvrent la plupart des indicateurs Article 12. Une vérification croisée manuelle reste recommandée sur le REF (qui dépend des certificats externes) et sur les pertes de conversion auxiliaires.

**8. Puis-je externaliser complètement la déclaration à un consultant ?**
Oui, et c'est la voie choisie par la majorité des opérateurs mid-market. Les cabinets spécialisés (Schneider Electric Services, Vertiv Services, Nexity Datacenter, plus des boutiques spécialisées comme GreenFlex, Dalkia Engineering) proposent des prestations clé en main entre 15 000 et 50 000 € selon la taille du site. Pour les opérateurs gérant plus de 5 sites, un investissement interne (un responsable conformité EED temps plein) devient plus économique que l'externalisation.

---

## Closing section

La déclaration EED Article 12 du 15 mai 2026 est bien davantage qu'une simple formalité réglementaire : c'est le tri structurel qui dessinera le marché européen des datacenters pour la prochaine décennie. Les opérateurs qui déclareront dans les temps, avec des indicateurs solides et idéalement certifiés IPMVP, acquerront un avantage concurrentiel mesurable. Ceux qui ne le feront pas — ou qui déclareront des valeurs non conformes avec l'Article 21 qui s'applique dès janvier 2027 — subiront une décote de valorisation immédiate, une exclusion progressive des appels d'offres institutionnels, et un renchérissement de leur accès au financement vert.

**FINXIA Capital, via sa stratégie TITAN DC AI**, a construit son modèle d'investissement précisément autour de cette séquence réglementaire : repositionnement des actifs brownfield non conformes, remise en conformité certifiée sous IPMVP Option C par Bureau Veritas, et valorisation comme infrastructure premium sous EU Taxonomy 8.1.

[Lien interne vers : Guide complet EED datacenters 2026](/guides/eed-directive-datacenter-2026/)
[Lien interne vers : Stratégie TITAN DC AI](/strategies/#titan-datacenter)
[Lien interne vers : Profil auteure Lila Benhammou](/auteurs/lila-benhammou/)

---

## JSON-LD FAQPage à ajouter

Reprend les 8 questions de la section FAQ ci-dessus sous forme de schema FAQPage.

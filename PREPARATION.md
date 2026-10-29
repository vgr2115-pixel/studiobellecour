# Brief et état de vérification

Consultation : 29 octobre 2026. Statut : proposition de site, non officielle, non déployée.

## Sources

- https://www.planity.com/studio-bellecour-69002-lyon : activité, prestations, prix et prénoms de l’équipe.
- Fiche Google Maps fournie par l’utilisateur : adresse, téléphone 04 78 82 05 81, note 4,9/5 et 987 avis au relevé.
- Six photographies locales fournies par l’utilisateur. Quatre utilisées, sans images fictives. Validation des droits nécessaire avant publication officielle.
- https://www.instagram.com/timeo_klein/ : les 31 légendes et le carrousel de 14 slides ont été examinés. Les vidéos n’ont pas toutes été visionnées. Rapport détaillé livré séparément, avec la couverture exacte et les exclusions.

## Objectif et périmètre

Présenter le salon et faciliter la réservation sur sa vraie fiche Planity. Site statique HTML/CSS/JS, sans base de données, sans formulaire ni authentification. Cette architecture évite une dépendance serveur et permet une reprise simple. Un framework n’est pas nécessaire pour ce parcours.

Direction graphique : pierre et arches du lieu, végétal, vert profond et ivoire. Une photo réelle en ouverture plutôt qu’un modèle générique. Les espaces de soin et de détente servent le récit du lieu ; aucune fausse réalisation de coiffure ni faux témoignage.

## Faits et incertitudes

Adresse : 1 rue Colonel Chambonnet, 69002 Lyon. Coupe homme 33 €, brushing cheveux courts 38 €, coupe/soin/brushing cheveux courts 57 €, selon la fiche consultée. Les prix techniques sont variables ; renvoi au détail Planity.

Horaires contradictoires : la présentation de Planity, son tableau et la fiche Google Maps ne concordent pas. Aucun tableau d’horaires n’a été inventé : le site invite à appeler et à consulter les créneaux.

Identité juridique et mentions légales officielles non validées. Coordonnées email et réseaux du salon non établis : aucun lien supposé n’a été ajouté. Aucun résultat de conversion ni budget client supposé.

## Vérifications réalisées

Contrôle statique réussi : ancres internes, identifiants uniques, présence des images et textes alternatifs. Réservation dirigée vers l’URL Planity fournie ; appel et itinéraire sont des liens directs. Accordéons HTML natifs, fermeture de dialogue par bouton/Escape via dialog natif. CSS responsive, focus visible et reduced-motion prévus.

## Limite technique

Le serveur HTTP local a été refusé par l’environnement. Le chargement direct du fichier dans Safari n’a pas abouti ; l’outil d’ouverture de l’aperçu n’a pas abouti non plus. Aucun contrôle visuel mobile/ordinateur ni test d’interaction dans le navigateur ne peut donc être déclaré réussi. À effectuer avant présentation ou publication. Le code ne nécessite aucune compilation ; le contrôle statique ne remplace pas ces tests.

## Publication

Code enregistré dans le dépôt privé autorisé. Aucune publication en production, aucun domaine connecté et aucun message envoyé au salon. Noindex et robots.txt découragent l’indexation mais ne protègent pas l’accès.

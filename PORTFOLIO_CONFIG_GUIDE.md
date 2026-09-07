# Guide de configuration rapide

## Priorités avant publication

1. Renseigner `personal.email` et `contact.email`.
2. Ajouter `socials[].url` pour GitHub / LinkedIn.
3. Ajouter `personal.resumeUrl`.
4. Remplacer ou compléter l'expérience et la formation.
5. Ajouter les liens `github`, `demo` et `documentation` des projets lorsque disponibles.
6. Ajouter une photo avec `personal.profileImage` si souhaité.
7. Vérifier les niveaux de compétences et les statistiques.

## Ajouter un thème

Dans `theme.options` :

```json
{ "id": "dracula", "label": "Dracula", "mode": "dark" }
```

Comme tous les thèmes DaisyUI sont chargés, aucune modification CSS ou React n'est nécessaire pour un thème DaisyUI natif.

## Ajouter une nouvelle catégorie de projet

Il suffit d'ajouter un projet avec une nouvelle valeur de `category` : le filtre est créé automatiquement.

## Désactiver temporairement une section

Mettre sa clé à `false` dans l'objet `sections`. Les données peuvent rester dans le JSON : elles ne seront simplement pas rendues.

## Logos technologiques du Hero

La ligne de technologies du Hero utilise désormais de vrais logos de marques via `react-icons/si` (Simple Icons), affichés sous forme de logo cloud.

Configuration dans `src/data/portfolio.json` :

```json
{
  "name": "React",
  "logo": "react",
  "color": "#61DAFB",
  "url": "https://react.dev/"
}
```

Logos actuellement mappés dans `src/utils/techLogoMap.jsx` :

- `react`
- `python`
- `postgresql`
- `airflow`
- `dbt`
- `powerbi`

Le texte du nom n'est pas affiché comme un badge : il apparaît uniquement au survol/focus pour garder une interface visuelle et premium.

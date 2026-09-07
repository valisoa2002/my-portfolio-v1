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

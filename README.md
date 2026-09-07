# Portfolio Valisoa — AI · Data · Software

Portfolio moderne construit avec **React**, **Tailwind CSS v4**, **DaisyUI**, **Framer Motion** et **Lucide React**.

Le projet respecte un principe central : **les données métier du portfolio sont dans `src/data/portfolio.json`**. Les composants React se chargent uniquement de l'affichage et des interactions.

## 1. Lancer le projet

Prérequis : Node.js 20+ recommandé.

```bash
npm install
npm run dev
```

Puis ouvrir l'URL locale affichée par Vite.

### Build production

```bash
npm run build
npm run preview
```

Le dossier `dist/` généré peut être déployé sur un hébergement statique, IIS, Nginx, Netlify, Vercel, etc.

## 2. Personnaliser le portfolio

Modifier uniquement :

```text
src/data/portfolio.json
```

Vous pouvez y changer :

- identité et rôle ;
- Hero et CTA ;
- navigation ;
- projets ;
- compétences ;
- expériences ;
- formations ;
- certifications ;
- services ;
- réseaux sociaux ;
- contact ;
- SEO ;
- sections visibles ;
- thèmes DaisyUI proposés dans le sélecteur.

## 3. Ajouter un projet

Ajouter un objet dans :

```text
projects.items
```

La carte, le filtre de catégorie et la modal de détails sont générés automatiquement.

## 4. Activer / désactiver une section

Dans :

```json
"sections": {
  "projects": true,
  "testimonials": false
}
```

`true` affiche la section, `false` la masque.

## 5. Thèmes DaisyUI

Tous les thèmes DaisyUI intégrés sont compilés avec :

```css
@plugin "daisyui" {
  themes: all;
}
```

Le sélecteur affiche uniquement les thèmes listés dans :

```text
theme.options
```

Pour ajouter un thème DaisyUI au menu, ajoutez simplement son `id` et son `label` dans le JSON, par exemple :

```json
{ "id": "dracula", "label": "Dracula", "mode": "dark" }
```

Aucune modification de composant React n'est nécessaire.

## 6. Images

Les champs `profileImage`, `projects.items[].image` et `gallery` acceptent des chemins publics, par exemple :

```text
/profile.jpg
/projects/prism.webp
```

Placez les fichiers correspondants dans `public/`.

Si une image projet est vide, une illustration technologique de secours est automatiquement affichée.

## 7. Contact

Le formulaire utilise `mailto:` afin de rester 100 % statique. Ajoutez votre adresse dans :

```text
contact.email
```

Pour un envoi serveur réel, vous pourrez ensuite brancher Formspree, Resend, EmailJS ou une API personnelle sans modifier le reste du portfolio.

## 8. Architecture

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── TechStack.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Services.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Icon.jsx
│       ├── Reveal.jsx
│       ├── Section.jsx
│       ├── SectionHeader.jsx
│       ├── StatCard.jsx
│       └── TechBadge.jsx
├── data/
│   └── portfolio.json
├── hooks/
│   ├── useActiveSection.js
│   ├── useDocumentMeta.js
│   ├── useScrollProgress.js
│   └── useTheme.js
├── pages/
│   └── Home.jsx
├── utils/
│   └── iconMap.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 9. Fonctionnalités déjà intégrées

- thème DaisyUI multiple avec persistance localStorage ;
- navbar sticky et active section ;
- menu mobile ;
- scroll fluide ;
- scroll progress ;
- bouton retour en haut ;
- Hero animé ;
- reveal au scroll ;
- compteurs animés ;
- tabs de compétences ;
- filtres projets dynamiques ;
- modal projet avec chargement différé ;
- responsive mobile-first ;
- accessibilité clavier et `prefers-reduced-motion` ;
- SEO dynamique et JSON-LD ;
- fallback visuel si les images ne sont pas encore renseignées.

## 10. Vérifications recommandées après personnalisation

```bash
npm run lint
npm run build
```

Puis tester au minimum en 320 px, 390 px, 768 px, 1024 px et 1440 px.

### Mise à jour 1.1 — Logo cloud technologique

La ligne de technologies du Hero utilise maintenant de grands logos de marques (React, Python, PostgreSQL, Apache Airflow, dbt et Power BI) à la place des badges texte. Les noms restent accessibles au survol/focus et la liste est pilotée depuis `src/data/portfolio.json`.

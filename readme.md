# Will and Ways - Webflow Project

**Version**: 1.0.0  
**Date**: Décembre 2025
**Auteur**: Fabien Fournier - Uncode Studio

---

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

### Build Production

```bash
npm run build
```

Génère les fichiers optimisés dans `dist/`

---

## 📁 Structure

```
will-and-ways/
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
├── main.js                    # Point d'entrée
├── modules/
│   ├── utils.js              # Utilitaires partagés
│   └── ...                   # Modules à ajouter
└── dist/                     # Généré par build (ignoré par Git)
```

---

## 🔧 Intégration Webflow

### Mode DEV
```html
<!-- Custom Code: Before </body> -->
<script type="module" src="http://localhost:3000/main.js"></script>
```

### Mode PROD
```html
<!-- Custom Code: Before </body> -->
<script type="module" src="https://cdn.jsdelivr.net/gh/USERNAME/will-and-ways@main/dist/main.js"></script>
```

---

## 📦 Scripts NPM

```bash
npm run dev       # Serveur dev + hot reload
npm run build     # Build optimisé
npm run preview   # Test du build local
npm run deploy    # Build + commit + push
```

---

**Uncode Studio** - Webflow Expert
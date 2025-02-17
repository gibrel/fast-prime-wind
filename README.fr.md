# Modèle de projet FastPrimeWind

Un modèle pour que vous puissiez démarrer rapidement votre projet FastAPI + PrimeVue + TailwindCSS.

## Indice

- [Configuration](#configuration)
  - [Installer les Dépendances](#installer-les-dépendances)
  - [Exécuter le Projet](#exécuter-le-projet)
- [Structure du Projet](#structure-du-projet)
- [Exécution Autonome](#exécution-autonome)

## Configuration

Pour configurer le projet, suivez les étapes ci-dessous. Cela installera toutes les dépendances nécessaires pour le frontend et le backend.

### Installer les Dépendances

Exécutez la commande suivante pour installer toutes les dépendances :

```shell
npm run setup
```

La commande appelle le script `setup` dans `package.json` :

```json
"scripts": {
  "setup": "npm install && cd frontend && npm install && cd ../backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
}
```

Ce script va :

1. Installer les dépendances de la racine.
2. Naviguer vers le répertoire frontend et installer ses dépendances.
3. Naviguer vers le répertoire backend, créer et activer un environnement virtuel, et installer ses dépendances.

### Exécuter le Projet

Pour démarrer le projet, utilisez la commande suivante :

```shell
npm run start
```

La commande appelle le script `start` dans `package.json` :

```json
"scripts": {
  "start": "concurrently \"cd backend && source venv/bin/activate && uvicorn main:app --reload\" \"cd frontend && npm run dev\""
}
```

Ce script appelle `concurrently` pour exécuter simultanément les serveurs de développement backend et frontend. Il va :

- Naviguer vers le répertoire backend, activer l'environnement virtuel et démarrer le serveur FastAPI avec Uvicorn.
- Naviguer vers le répertoire frontend et démarrer le serveur de développement.

## Structure du Projet

Voici un aperçu de la structure du projet pour aider à comprendre où se trouve chaque partie du code.

```text
📁project-root/
├─📁 backend/           # Code backend avec FastAPI
│ ├─📄 main.py          # Point d'entrée pour le serveur FastAPI
│ ├─📄 requirements.txt # Dépendances du backend
│ └─📄 ...              # Autres fichiers du backend
├─📁 frontend/          # Code frontend avec PrimeVue et TailwindCSS
│ ├─📁 public/          # Fichiers publics, à publier
│ ├─📁 src/             # Code source du projet
│ │ ├─📁 assets/        # Fichiers statiques, comme les images et les styles
│ │ ├─📁 components/    # Composants réutilisables de Vue.js
│ ├─📁 presets/         # Fichiers compilés des thèmes de TailwindCSS
│ │ ├─📄 App.vue        # Composant racine de Vue.js
│ │ └─📄 main.js        # Fichier d'entrée principal
│ ├─📄 package.json     # Dépendances du frontend
│ └─📄 ...              # Autres fichiers du frontend
├─📄 package.json       # Dépendances et scripts de la racine
└─📄 README.md          # Documentation du projet
```

## Exécution Autonome

Pour plus d'informations sur l'exécution de la solution Backend ou Frontend de manière autonome, consultez la documentation ci-dessous:

- [Backend](./backend/README.fr.md)
- [Frontend](./frontend/README.fr.md)

|  |  |  |  |  |
|-----:|-----:|-----:|-----:|-----:|
| [English](README.en.md) |  [Português](README.pt.md) | [Español](README.es.md) | [Français](README.fr.md) | [简体中文](README.zh.md) |

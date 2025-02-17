# PrimeVue Frontend avec TailwindCSS

## Configuration

À la racine du projet, le script de configuration gère les paramètres du backend et du frontend, donc vous n'avez pas à vous en soucier. Cependant, si vous prévoyez d'exécuter le frontend séparément du backend, vous devez configurer le frontend vous-même, en suivant les étapes ci-dessous. Assurez-vous d'être dans le dossier frontend avant d'exécuter les commandes.

```shell
cd frontend/
```

### Installer les Dépendances

Installez toutes les dépendances nécessaires listées dans le fichier `package.json`. Ces dépendances sont essentielles au bon fonctionnement du projet.

```shell
npm install
```

### Exécuter le Projet

Démarrez le serveur de développement. La commande ci-dessous démarre le serveur et vous permet de voir les modifications en temps réel pendant le développement.

```shell
npm run dev
```

### Mettre à Jour les Dépendances

Pour maintenir les dépendances du projet à jour, vous pouvez utiliser la commande ci-dessous. Elle vérifie et installe les dernières versions des dépendances listées dans le `package.json`.

```shell
npm update
```

## Structure du Projet

Voici un aperçu de la structure du projet pour aider à comprendre où se trouve chaque partie du code.

```text
📁frontend/
├─📁 public/ # Fichiers publics, à publier
├─📁 src/ # Code source du projet
│ ├─📁 assets/ # Fichiers statiques, comme les images et les styles
│ ├─📁 components/ # Composants réutilisables de Vue.js
│ ├─📁 presets/ # Fichiers compilés des thèmes de TailwindCSS
│ ├─📄 App.vue # Composant racine de Vue.js
│ └─📄 main.ts # Fichier d'entrée principal
├─📄 package.json # Fichier de configuration npm
├─📄 ... # autres fichiers de configuration
└─📄 README.md # Documentation du projet
```

> TailwindCSS est déjà configuré pour utiliser le thème Aura. Il est présent dans le dossier presets. Si vous souhaitez installer un autre thème, placez-le là, à côté du dossier aura.

[Retourner](../README.fr.md)

|  |  |  |  |  |
|-----:|-----:|-----:|-----:|-----:|
| [English](README.en.md) |  [Português](README.pt.md) | [Español](README.es.md) | [Français](README.fr.md) | [简体中文](README.zh.md) |

# Backend Python avec FastAPI

## Configuration

À la racine du projet, le script de configuration gère les paramètres du backend et du frontend, vous n'avez donc pas à vous en soucier. Cependant, si vous prévoyez d'exécuter le backend séparément du frontend, vous devez créer l'environnement virtuel, l'activer, installer les dépendances et l'exécuter indépendamment. Voici les instructions pour chacune de ces étapes. Si vous ajoutez des bibliothèques supplémentaires au projet, n'oubliez pas de mettre à jour le fichier de dépendances. Assurez-vous d'exécuter ces commandes dans le dossier backend.

```shell
cd backend/
```

### Créer et Activer l'Environnement Virtuel

Créez un environnement virtuel nommé _venv_ dans le répertoire actuel. Un environnement virtuel est un outil qui aide à garder les dépendances du projet isolées des dépendances du système.

```shell
python3 -m venv venv
```

La commande suivante active l'environnement virtuel, vous permettant d'installer et d'utiliser des packages Python dans cet environnement isolé.

```shell
source venv/bin/activate
```

### Installer les Dépendances

Après avoir activé le _venv_, vous devriez pouvoir exécuter pip et python dans l'environnement isolé. Nous pouvons maintenant installer toutes les dépendances listées dans le fichier requirements.txt. Ces dépendances sont nécessaires pour que le projet fonctionne correctement.

```shell
pip install -r requirements.txt
```

## Exécuter

La commande suivante démarre le serveur FastAPI en utilisant Uvicorn. L'option --reload fait redémarrer automatiquement le serveur chaque fois que vous apportez des modifications au code, facilitant ainsi le développement.

```shell
uvicorn main:app --reload
```

### Mettre à Jour le Fichier de Dépendances

Tout d'abord, vous devez installer des outils qui aident à gérer et à mettre à jour les dépendances du projet. Ces outils sont pipreqs et pip-tools.

```shell
pip install pipreqs pip-tools
```

Ensuite, vous générerez un fichier requirements.in basé sur les importations de votre code en utilisant pipreqs. Ensuite, vous convertirez requirements.in en requirements.txt en utilisant pip-compile, en vous assurant que toutes les dépendances sont listées avec leurs versions spécifiques.

```shell
pipreqs --savepath=requirements.in && pip-compile -q --no-annotate
```

- Si le package _uvicorn_ est manquant, ajoutez-le manuellement au fichier requirements.txt pour éviter les erreurs.

[Retourner](../README.fr.md)

|  |  |  |  |  |
|-----:|-----:|-----:|-----:|-----:|
| [English](README.en.md) |  [Português](README.pt.md) | [Español](README.es.md) | [Français](README.fr.md) | [简体中文](README.zh.md) |

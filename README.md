
## Projet simple de liaison entre compétences, évaluations et classes.

### Refactoring du projet

Ce projet a tout d'abord été basé sur le nouveau système de composant Angular. La majeure partie du code se base dessus et est déjà utilisable.

Le projet est en cours de réécriture sous ReactJS/Redux, pour le tester executer les commandes suivantes :

```
# npm install 

# npm run watch
```

Pointez ensuite votre navigateur sur le fichier react.html (serveur non encore intégré).

### Liste des features 

- [x] Création d'un composant classroom pour enregistrer une classe dans le LocalStorage
- [x] Affichage de la liste des classes enregistrées.
- [x] Affichage et édition d'une classe en particulier.
- [x] Découpage des données pour afficher les élèves d'une classe
- [ ] Export des données.
- [ ] Import des données
- [x] Création d'un module de compétences avec :
  - [x] affichage
  - [x] création
  - [x] édition des compétences 
- [x] Module d'évaluation avec
  - [x] Liste de toutes les compétences
  - [x] Sélection d'un R/J/V
  - [x] Champ date
  - [x] Bouton validation qui prend en compte l'ensemble des compétences
  - [x] Si R/J/V pas sélectionner la compétence n'est pas évaluée
- [ ] Module d'affichage des évaluations

### Quelques infos sur le projet

* Les données sont stockées en local pour le moment. 
* Un export/import de données devra être possible


### Quelques références 

* http://codepen.io/dervondenbergen/pen/jCqzl

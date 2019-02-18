YARN
----

Yarn is een package manager voor JavaScript projecten.
We gebruiken Yarn om dependencies toe te voegen aan ons project.

Je dient volgende commandos te begrijpen:

- yarn init
- yarn create react-app my-twitter-clone
- yarn install
- yarn start
- yarn build

## Concepts

* package.json
* node_modules
* dependency

## Todos

* Maak een nieuw project met yarn init en verwijder het weer.
* Maak een nieuw project met yarn create.
* Voeg crel toe aan het project
* Gebruik yarn om je project te builden.

## Vaakst gebruikte commandos:

Een nieuw project opstarten:
	`yarn create react-app clickhandle-everything`

Een dependency toevoegen (bvb op de chance library):
	`yarn add chance`

De development server opstarten:
	`yarn start`

Project compileren naar de build/ folder:
	`yarn build`

## Een blanco project (zonder react) aanmaken:

We gebruiken `yarn create react-app ...` ook voor projecten op te starten waarin we geen React gebruiken.

1. Nadat je een nieuw project hebt opgestart mag je in de src/ en public/ folders alle bestanden verwijderen.

2. Maak een nieuwe index.html in public/

3. Maak een nieuwe index.js in src/

4. Gebruik dan `yarn start` om te beginnen

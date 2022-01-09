# Olympic Games
Olympic Games web app for education purpose

## Tutorial
You can use my own database or create one on : 
* https://www.mongodb.com/fr-fr/cloud/atlas/register

## API Features
* `GET /api/athletes` get all athletes
* `GET /api/sports` get all sports
* `GET /api/sports/{sportId}` get a sport from sportId
* `GET /api/athletes/{athleteId}` get an athlete from athleteId
* `POST /api/athletes` create a new athlete
* `POST /api/sports` create a new sport
* `POST /api/athletes/delete/{athleteId}` delete an existing athlete
* `POST /api/sports/delete/{sportId}` delete an existing sport
* `GET /api/athletes/{athleteId}/sports` get all athlete sports
* `GET /api/sports/{sportId}/athletes` get all sport athletes

## Webapp Features
* Home page
* Show all athletes
* Show all sports
* Create a new athlete
* Create a new sport
* Delete an existing athlete
* Delete an existing sport

## Future Features
* `POST /api/sports/{sportId}/athletes/{athleteId}` add an athlete in a sport
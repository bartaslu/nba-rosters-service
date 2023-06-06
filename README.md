## Small web service API for NBA Rosters  
To launch you have to have [docker]("https://www.docker.com/products/docker-desktop/") installed and opened:
1. Clone the repository: git clone https://github.com/bartaslu/nba-rosters-service
2. `cd nba-rosters-service`
3. Run `docker-compose up`
4. Wait until both services are started

## How to GET information
5. Now you can go on your browser or use some additional program(like postman) for GET method `http://localhost:5000/players`
6. To get informationn in the database about teams go on your browser or use postman for GET method `http://localhost:5000/teams`

## How to CREATE a team
```
  POST http://localhost:5000/teams/

  body: 
  {
    "name": "Chicago Bulls",
    "city": "Chicago",
    "arena": "United Center",
    "players": [
      "fill in with players id",
      ...
      "players id"
    ]
  }
```
Players is not required field, so it's possible to create a team without players first.


## How to update the information
7. UPDATE your teams with player via Postman app 
```
  PUT http://localhost:5000/teams/${fill in team id}

  {
    players: [
     "player.id",
      ....
     "player.id",
    ]
  }

```

## How to delete
8. Via postman DELETE method 
```
   DELETE http://localhost:5000/players/${fill in player id}
or
   DELETE http://localhost:5000/teams/${fill in team id}
```

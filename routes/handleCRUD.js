module.exports = function(games, client, db) {
  // models
  const { Lobby, Player, Coordinate } = db; 

  // ==========> CREATE

  /* Add lobby to DB */
  client.on('createLobby', data => {
    const { lobbyID } = data;

    // ===  rebuild
    if (!games.hasOwnProperty(lobbyID)) {
      games[lobbyID] = {
        coordinates: {}
      };
    } else {
      emit('lobbyExists'); // ask host to make lobby again. Error handling
    }
    // === rebuild

    const newLobby = new Lobby({
      lobbyID,
      players: [],
      currentView: 'LandingView'
    })

    newLobby.save().then(() => {
      //
      client.emit('success', `Successfully added ${lobbyID} to the Lobby DB.`);
      
      // emit to the host once lobby is created - await
      client.emit('lobbyCreated');
    }).catch(err => {
      //
      client.emit('err', err);
    });
  })


  /* Add user to DB */
  client.on('createPlayer', data => {
    const { username, coordinates } = data;

    const newPlayer = new Player({
      username,
      coordinates
    });

    newPlayer.save().then(() => {
      //
      client.emit('success', `Successfully added ${username} to the Player DB.`);
      client.emit('playerCreated', newPlayer);
    }).catch(err => {
      //
      client.emit('err', err);
    
    });
  });


  // ==========> READ

  /* Given 'lobbyID', return that lobby object from the DB */
  client.on('findLobby', data => {
    const { lobbyID } = data;

    Lobby.findOne({lobbyID}, (err, lobbyObj) => {
      if(err) {
        //
        client.emit('err', err);
      } else if (!lobbyObj) {
        //
        client.emit('err', 'Could not find lobby.');
      } else {
        //
        client.emit('lobbyFound', lobbyObj);
      }
    });
  });

  /* Given '_id', return that player object from the DB */
  client.on('findPlayer', data => {
    const { _id } = data;
    //

    Player.findOne({_id}, (err, playerObj) => {
      if(err) {
        //
        client.emit('err', err);
      } else if(!playerObj) {
        //
        client.emit('err', 'Player does not exist.');
      } else {
        //
        client.emit('playerFound', playerObj);
        
        // also return player username
        client.emit('username', playerObj.username);
      }
    });
  });


  // ==========> UPDATE
  
  /* Given 'lobbyID', add player to players array (players in lobby) */
  client.on('addToPlayers', data => {
    const { lobbyID, playerObj } = data;
    const filter = { lobbyID };
    const update = { "$push": {  "players": playerObj }};
    //

    Lobby.findOneAndUpdate(filter, update, { "new": true, "upsert": false}, (err, lobbyObj) => {
      if(err) {
        //
        client.emit('err', err);
      } else if (!lobbyObj) {
        //
        client.emit('err', `That lobby doesn't exist!`);
      } else {
        //
        //
        client.emit('playerAdded', lobbyObj);
      }
    });
  })

  /* Given Player '_id', update their coordinates array */
  client.on('saveFinalCoords', data => {
    const { _id, coordinates } = data;

    //
  });

  // ==========> DELETE


}
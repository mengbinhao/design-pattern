function Player(name, teamColor) {
	this.name = name
	this.teamColor = teamColor
	this.state = 'alive'
}

Player.prototype.win = function() {
	console.log(`${this.name} won`)
}

Player.prototype.lose = function() {
	console.log(`${this.name} lost`)
}

Player.prototype.die = function() {
	this.state = 'dead'
	playerDirector.ReceiveMessage('playerDead', this)
}

Player.prototype.remove = function() {
	playerDirector.ReceiveMessage('removePlayer', this)
}

Player.prototype.changeTeam = function(color) {
	playerDirector.ReceiveMessage('changeTeam', this, color)
}

var playerFactory = function(name, teamColor) {
	var newPlayer = new Player(name, teamColor)
	playerDirector.ReceiveMessage('addPlayer', newPlayer)
	return newPlayer
}

var playerDirector = (function() {
	var players = {},
			operations = {}

	operations.addPlayer = function(player) {
		var teamColor = player.teamColor
		//if this kind of teamColor does not exist, then create it
		players[teamColor] = players[teamColor] || []
		players[teamColor].push(player)
	}

	operations.removePlayer = function(player) {
		var teamColor = player.teamColor,
				teamPlayers = 	players[teamColor] || []
		for (var i = teamPlayers.length - 1; i >= 0; i--) {
			if (teamPlayers[i] === player) {
				teamPlayers.splice(i, 1)
			}
		}
	}

	operations.changeTeam = function(player, newTeamColor) {
		operations.removePlayer(player)
		player.teamColor = newTeamColor
		operations.addPlayer(player)
	}

	operations.playerDead = function(player) {
		var teamColor = player.teamColor,
				teamPlayers = players[teamColor],
				all_dead = true

		for (var i = 0, player; player = teamPlayers[i++];) {
			if (player.state !== 'dead') {
				all_dead = false
				break
			}
		}

		if (all_dead === true) {
			for (var i = 0, player; player = teamPlayers[i++];) {
				player.lose()
			}

			for (color in players) {
				if (color !== teamColor) {
					var teamPlayers = players[color]
					for (var i = 0, player; player = teamPlayers[i++];) {
						player.win()
					}
				}
			}
		}
	}

	var ReceiveMessage = function() {
		var message = Array.prototype.shift.call(arguments)
		operations[message].apply(this, arguments)
	}
	return {
		ReceiveMessage
	}
})()

var player1 = playerFactory('皮蛋', 'red')
var player2 = playerFactory('皮墩', 'red')
var player3 = playerFactory('皮皮', 'red')

var player4 = playerFactory('阿豆', 'blue')
var player5 = playerFactory('阿强', 'blue')
var player6 = playerFactory('阿亮', 'blue')

// player1.die()
// player2.die()
// player3.die()

// player1.remove()
// player2.die()
// player3.die()

player1.changeTeam('blue')
player2.die()
player3.die()
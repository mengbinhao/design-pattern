var ryu = {
  attack() {
    console.log('attack')
  },
  defense() {
    console.log('defense')
  },
  jump() {
    console.log('jump')
  }
}

var makeCommand = function(receiver, state) {
  return function() {
    receiver[state]()
  }
}

var command = {
  119: 'jump',
  115: 'attack',
  100: 'defense'
}

var commandStack = []

document.onkeypress = function(e) {
  var keycode = e.keycode
      command = makeCommand(ryu, command[keycode])

  if (command) {
    command()
    commandStack.push()
  }
}

document.querySelector('#btn').onclick = function() {
  var command
  while (command = commandStack.shift()) {
    command()
  }
}
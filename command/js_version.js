var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute()
  }
}

var menuBar = {
  refresh() {
    console.log('refresh')
  }
}

var RefreshCommand = function(receiver) {
  return {
    execute() {
      receiver.refresh()
    }
  }
}

var refreshCommand = RefreshCommand(menuBar)
setCommand(btn1, refreshCommand)
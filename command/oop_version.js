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

var subMenuBar = {
  add() {
    console.log('add')
  },
  del() {
    console.log('del')
  }
}

var refreshBarCommand = function(receiver) {
  this.receiver = receiver
}

refreshBarCommand.prototype.execute = function() {
  this.receiver.refresh()
}

var addBarCommand = function(receiver) {
  this.receiver = receiver
}

addBarCommand.prototype.execute = function() {
  this.receiver.add()
}

var delCommand = function(receiver) {
  this.receiver = receiver
}

delCommand.prototype.execute = function() {
  this.receiver.del()
}

var refreshBarCommand = new refreshBarCommand(menuBar)
var addBarCommand = new addBarCommand(subMenuBar)
var delCommand = new delCommand(subMenuBar)

setCommand(btn1, refreshBarCommand)
setCommand(btn2, addBarCommand)
setCommand(btn3, delCommand)
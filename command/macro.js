var closeDoorCommand= {
	execute() {
		console.log('closeDoor')
	}
}

var openPCCommand= {
	execute() {
		console.log('openPC')
	}
}

var openQQCommand= {
	execute() {
		console.log('openQQ')
	}
}

var MacroCommand = function() {
	return {
		commandList: [],
		add(command) {
			this.commandList.push(command)
		},
		execute() {
			for(var i = 0, command; command=this.commandList[i++];) {
				command.execute()
			}
		}
	}
}

var macroCommand = MacroCommand()
macroCommand.add(closeDoorCommand)
macroCommand.add(openPCCommand)
macroCommand.add(openQQCommand)
macroCommand.execute()
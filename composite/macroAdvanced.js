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

var openACCommand= {
	execute() {
		console.log('openAC')
	}
}

var openTVCommand= {
	execute() {
		console.log('openTV')
	}
}

var openSoundCommand= {
	execute() {
		console.log('openSound')
	}
}

var mc1 = MacroCommand()
mc1.add(openTVCommand)
mc1.add(openSoundCommand)

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

var mc2 = MacroCommand()
mc2.add(closeDoorCommand)
mc2.add(openPCCommand)
mc2.add(openQQCommand)

var mcAll = MacroCommand()
mcAll.add(openACCommand)
mcAll.add(mc1)
mcAll.add(mc2)
// index.js - Main code for the riad package

class Riad {
    constructor() {
        this.noPrefixCommands = [];
    }

    // Method to add a command
    addCommand(command) {
        this.noPrefixCommands.push(command);
    }

    // Method to remove a command
    removeCommand(command) {
        const index = this.noPrefixCommands.indexOf(command);
        if (index !== -1) {
            this.noPrefixCommands.splice(index, 1);
        }
    }

    // Method to list all commands
    listCommands() {
        return this.noPrefixCommands;
    }
}

// Export the class so it can be used in other files
module.exports = Riad;

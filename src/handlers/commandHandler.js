const fs = require('fs');

module.exports = (client, Discord) => {
    const commandFiles = fs
        .readdirSync("src/commands")
        .filter(file => file.endsWith(".js")); // Get and filter all the files in the "Commands" Folder.
    for (const file of commandFiles) {
        const command = require(`../commands/${file}`); // Get and define the command file.
        client.commands.set(command.data.name, command); // Set the command name and file for handler to use.
        client.commandarray.push(command.data.toJSON()); // Push the command data to an array (for sending to the API).
    }
}
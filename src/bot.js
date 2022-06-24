const discord = require("discord.js");
const { Client, Intents, Collection } = discord
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES],
});


client.config = require("../config.json");
client.commands = new Collection();
client.commandArray = [];
client.utilities = {
    mongo: require("./utilities/mongo.js"),
    embed: require("./utilities/embed.js")
};

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
});

client.login(process.env.TOKEN || client.config.token); 

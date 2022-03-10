const Discord = require("discord.js")
const { Client, Intents, Collection } = Discord
const botClient = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

botClient.config = require("../config.json")
botClient.commands = new Collection();
botClient.commandarray = [];

['commandHandler', 'eventHandler'].forEach(handler => {
  require(`./handlers/${handler}`)(botClient, Discord);
})


botClient.login(process.env.token || botClient.config.token); 

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns the bots API latency"),
  execute: async (interaction, client, discord) => {
    return interaction.reply(`Pong! API Latency is \`${client.ws.ping}ms\` `);
  },
};

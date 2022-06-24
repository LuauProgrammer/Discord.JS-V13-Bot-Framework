const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Returns the bots API latency."),
    permissions: [],
    execute: async (interaction, client, discord) => {
        const apiLatency = `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\`\`\``;
        return await interaction.reply({
            embeds: [client.utilities.embed.createEmbed("Pong! 🏓", null, { "API Latency": apiLatency }, false, client.config.colors.success, null, { text: String(interaction.user.username), iconURL: interaction.user.displayAvatarURL() })]
        });
    },
};

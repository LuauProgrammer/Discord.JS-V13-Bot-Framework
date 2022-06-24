const { Permissions } = require('discord.js');
const e = require('express');

module.exports = async (discord, client, interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    if (!interaction.guild) return interaction.reply({ content: "Slash commands cannot be ran in my DMs!", ephemeral: true });

    try {
        if (command.permissions.length !== 0) {
            await command.permissions.forEach(async function (field, index) {
                if (interaction.member.permissions.has(Permissions.FLAGS[field])) return command.execute(interaction, client, discord); else return interaction.reply({ content: "You do not have permission to run this command!", ephemeral: true });
            })
        } else {
            await command.execute(interaction, client, discord);
        }
    } catch (error) {
        console.log(error);
        return interaction.reply({ content: "There was an error while executing this command!", ephemeral: true, });
    }
}
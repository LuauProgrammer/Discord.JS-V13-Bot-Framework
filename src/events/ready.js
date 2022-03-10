const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

module.exports = async (Discord, client) => {

    const rest = new REST({ version: "9" }).setToken(process.env.token || client.config.token);

    (async () => {
        try {
            console.log("Started refreshing application commands.");

            await rest.put(Routes.applicationCommands(client.user.id), {
                body: client.commandarray,
            });

            console.log("Successfully refreshed application commands.");
        } catch (error) {
            console.error(error);
        }
    })();
    console.log(`Logged in as ${client.user.tag}.`);
}
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

module.exports = async (discord, client) => {
    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN || client.config.token);

    (async () => {
        try {
            console.log("Started refreshing application commands.");

            await rest.put(Routes.applicationCommands(client.user.id), {
                body: client.commandArray,
            });
            await rest.put(Routes.applicationGuildCommands(client.user.id, "759964597293154304"), {
                body: client.commandArray,
            });
            console.log("Successfully refreshed application commands.");
        } catch (error) {
            console.log(error);
        }
    })();

    setInterval(() => {
        const activity = client.config.statuses[Math.floor(Math.random() * client.config.statuses.length)]

        client.user.setActivity(activity, { type: 'PLAYING' });
    }, 15000);

    client.user.setActivity("with the start command", { type: 'PLAYING' });
    console.log(`Logged in as ${client.user.tag}.`);
}
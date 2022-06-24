const fs = require('fs');

module.exports = (client, discord) => {
    const load_dir = () => {
        const eventFiles = fs.readdirSync(`src/events/`).filter(file => file.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../events/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, discord, client));
        }
    }
    load_dir();
}
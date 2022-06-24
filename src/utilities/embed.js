const { MessageEmbed } = require("discord.js");

module.exports = {
    createEmbed: function (title, description, fields, inline, color, image, footer) {
        const embed = new MessageEmbed()
            .setTimestamp()
        if (title) embed.setTitle(title)
        if (description) embed.setDescription(description)
        if (fields) Object.keys(fields).forEach(function (key) { embed.addField(key, fields[key], inline) });
        if (color) embed.setColor(color)
        if (image) embed.setImage(image)
        if (footer) embed.setFooter(footer);

        return embed
    },
    editEmbed: function (embed, clear, title, description, fields, inline, color, image, footer) {

        const newEmbed = new MessageEmbed(embed)
            .setTimestamp()
        if (clear) newEmbed.fields = []
        if (title) newEmbed.setTitle(title)
        if (description) newEmbed.setDescription(description)
        if (fields) Object.keys(fields).forEach(function (key) { newEmbed.addField(key, fields[key], inline) });
        if (color) newEmbed.setColor(color)
        if (image) newEmbed.setImage(image)
        if (footer) newEmbed.setFooter(footer);

        return embed
    }
}

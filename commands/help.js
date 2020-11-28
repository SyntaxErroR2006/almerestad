const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helpEmbed = new discord.MessageEmbed()
        .setTitle("Almere Stad Commandos!")
        .setThumbnail(message.guild.iconURL({ size: 1024 }))
        .setColor("#00bf49")
        .setFooter(`Opgevraagd door: ${message.author.tag}`)
        .setDescription("De prefix van deze bot is: `!`")
        .addField("Commands", "`!help`")
        .addField("Mods", "`!ban`, `!kick`, `!training`")
        .addField("Administratie", "`!prefix`, `!zeg`, `!nickname`");

    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}
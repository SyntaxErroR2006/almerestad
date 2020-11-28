const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const package  = require("../package.json");

module.exports.run = async (client, message, args) => {
    var members = message.guild.members.cache;
        var embed = new discord.MessageEmbed()
            .setTitle(`Informatie`)
            .setColor("ddf602")
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`**Bot Name:**`, client.user.username)
            .addField(`**ID**`, client.user.id)
            .addField(`**Prefix:**`, botConfig.prefix)
            .addField(`**Created At**`, client.user.createdAt)
            .addField(`**Created By:**`, botConfig.owner)
            .addField(`**de bot zit in zo veel Servers:**`, client.guilds.cache.size)
            .addField(`**Members (Excl. Bots):**`, members.filter(member => !member.user.bot).size)
            .addField(`**Discord.js Version:**`, package.dependencies["discord.js"])
            .setTimestamp()
            .setFooter(botConfig.footer)
        return message.channel.send(embed);
    }

module.exports.help = {
    name: "botinfo",
    description: "Hier mee kan u de Bot informatie vinden."

}

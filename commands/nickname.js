const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je kan dit niet doen!");

    const member = message.mentions.members.first();
    if (!member) return message.channel.send(`Tag een gebruiker om zijn nickname te kunnen veranderen.`);
    member.setNickname(args.slice(1).join(" ")), message.channel.send(`Succesvol! ${message.member} nickname: ${args.slice(0).join(" ")}`)


}

module.exports.help = {
    name: "nickname"
}
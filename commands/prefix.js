const discord = require("discord.js");
const botConfig = require("../botconfig.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: botConfig.prefix

        }
    }
    let prefix = prefixes[message.guild.id].prefix;
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Je kan dit niet!");

        if(!args[0]) return message.reply("Gelieve een prefix te noemen!");
        prefixes[message.guild.id] = {
            prefix: args[1]

        }
        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });
        var embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Prefix")
        .setDescription(`Gezet naar: ${args[1]}`);

        message.channel.send(embed);
    }

module.exports.help = {
    name: "prefix"
}
const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const { join } = require("path");



const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});




client.login(process.env.token);


client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    let activities = ["Almere Stad Roleplay", "!help", ]
    i = 0;
    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: activities[i++ % activities.length],
                type: "LISTENING",
                type: "PLAYING",
                type: "WATCHING",
                type: "PLAYING"
            }
        })
    }, 5000);



});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var args = message.content.split(" ");

    var command = args[0];

    //Command handler

    if(!message.content.startsWith(prefix)) return;

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, args);
    
});

// -WELKOM COMMAND-
client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('760483790136016927');

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('760502346135633921');

    if (!channel) return;

    // channel.send(`Welkom bij de server ${member}! Voor hulp typ: .help.`);
    
    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hallo! ${member.user.username}, Welkom bij de server! Info over de bot? typ: !info`)
        .setColor("#30db00")
        .setFooter("Gebruiker gejoined op:")
        .setTimestamp();
    channel.send(joinEmbed);
});



client.on("guildMemberRemove", member => {
;

    var channel = member.guild.channels.cache.get('754342706158764045');

    if (!channel) return;
    
    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Jammer dat ${member.user.username}, weg is!`)
        .setColor("#fc0d00")
        .setFooter("Gebruiker geleaved op:")
        .setTimestamp();
    channel.send(leaveEmbed);
})






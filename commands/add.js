const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var categoryID = "773513200691838996";

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen.");

    if (message.channel.parentID != categoryID) return message.reply("Je bent niet in een ticket.");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if (!addUser) return message.reply("Geen gebruiker meegegeven.");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Antwoord binnen 30sec.")
        .setDescription(`Wil je ${addUser} toevoegen?`);

    var embedK = new discord.MessageEmbed()
        .setTitle("Gebruiker toegevoegd")
        .setColor("GREEN")
        .setTimestamp()
        .addField("Toegevoegde gebruiker:", `${addUser}`)
        .addField("Toegevoegd door:", message.author);

    message.channel.send(embedPrompt).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"])

        if (emoji == "✅") {

            msg.delete();

            message.channel.updateOverwrite(addUser, {
                SEND_MESSAGES: true,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGES: true,
                ATTACH_FILES: true,
                ADD_REACTIONS: true,
                CONNECT: true,
                READ_MESSAGES_HISTORY: true,
                VIEW_CHANNEL: true
            });

            message.channel.send(embedK).then(msg => msg.delete({timeout: 10000}));

        }else if(emoji == "❌"){

            msg.delete();

            message.reply("Toevoeging geannuleerd.").then(msg => msg.delete({timeout: 5000}));
        }

    });

}

async function promptMessage(message, author, time, reactions) {

    time *= 1000;

    for (const reaction of reactions) {
        await message.react(reaction);
    }

    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    return message.awaitReactions(filter, { max: 1, time: time}).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "add"
}
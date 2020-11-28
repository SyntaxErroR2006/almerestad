const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "656193910863036426"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == "ticket" + "-" + userName.toLowerCase()) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt!");

            return;

        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hallo! " + message.author.username)
        .setDescription(`<:Vinkje:754602615781982259> Je ticket wordt aangemaakt!`)
        .setColor("#00bf49");

    message.channel.send(embed);

    message.guild.channels.create("ticket" + "-" + userName.toLowerCase(), { type: "text" }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Support Team'), {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var reden = args.join(" ").slice(5)

                    if (reden.length <= 0) {
                        reden = "Geen onderwerp gegeven."
                    }

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Ticket van ${message.author.username}`)
                        .setDescription(`We willen graag direct je klachten/vragen horen, zodat een staff lid direct kan reageren en helpen! \n\n Met Vriendelijke groet \n Almere Stad Roleplay Staff-team.`)
                        .addField("Onderwerp", reden)
                        .setColor("#00bf49")
                        .setFooter(`Ticket gemaakt op:`)
                        .setTimestamp();

                    settedParent.send({content: `<@${message.author.id}>`, embed: embedParent});
                    // channel.send({content: "@here", embed: DOE_JE_EMBED_HIER})




                }
            ).catch(err => {
                message.channel.send("Er is iets foutsgelopen");
                console.log(err);
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets foutsgelopen");
        console.log(err);
    });


}

module.exports.help = {
    name: "new"
}
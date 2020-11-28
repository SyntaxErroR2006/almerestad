const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    //!training <DIENSTNUMMER> <TYPE> <CO-HOST> <DATUM> <TIJD> <OPMERKINGEN>

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet gebruiken");

    var seperator = "|";

    if (args[1] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Training Menu")
            .setColor("#55c260")
            .addField("1.", "Politie (POL)")
            .addField("2.", "Ambulance (AMB)")
            .addField("3.", "Brandweer (BRW)")
            .addField("4.", "Rijkswaterstaat (RWS)")
            .addField("5.", "Koninklijke Marechaussee (KMar)")
            .addField("6.", "Dienst Speciale Interventies (DSI)")
            .addField("7.", "Dienst Verkeerspolitie (DVP)")
            .setDescription(`Je maakt een training aan door het volgende te doen: \n\n !training <DIENSTNUMMER> ${seperator} <TYPE> ${seperator} <CO-HOST> ${seperator} <DATUM> ${seperator} <TIJD> ${seperator} <OPMERKINGEN> ${seperator} <KANAAL (geen tag)> \n\n De dienstnummers:`);

        return message.reply(embed);

    }

    // 1: Politie
    // 2: Ambulance
    // 3: Brandweer
    // 4: Rijkswaterstaat
    // 5: Koninklijke Marechaussee
    // 6: Dienst Speciale Interventies
    // 7: Verkeerspolitie


    var argsList = args.join(" ").split(seperator);

    if (argsList[6] === undefined) argsList[6] = "trainingen";

    var options = {

        Dienst: argsList[0].trim(),
        TypeTraining: argsList[1],
        Hulp: argsList[2],
        Datum: argsList[3],
        Tijd: argsList[4],
        Opmerkingen: argsList[5],
        kanaal: argsList[6].trim()

    }


    if (args[1] == "1") {


        var politieEmbed = new discord.MessageEmbed()
            .setTitle("Politie training")
            .setColor("#283dfc")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Politie" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-1.discordapp.net/external/KKlJvqlZCrOZwbqEMtUGoP7CFcXh5X09Q7QETs4WziE/%3Fq%3Dtbn%253AANd9GcR8Mjlge86tu_5b9wk9EeAS97S5ij9NOGivxTgXC5k3uqsO2ICA%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(politieEmbed);

    } else if (args[1] == "2") {

        var ambulanceEmbed = new discord.MessageEmbed()
            .setTitle("Ambulance training")
            .setColor("#fcf228")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Ambulance" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/V-rqFb9iD1SZ5I_88D0sbxXHqgs9EotbAjjiJAd176A/https/upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/260px-Star_of_life2.svg.png")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(ambulanceEmbed);

    } else if (args[1] == "3") {

        var brandweerEmbed = new discord.MessageEmbed()
            .setTitle("Brandweer training")
            .setColor("#eb4034")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Brandweer" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/-P4wDrIicXyyiXboPZGDyrJ9NWDOZeO6D_UxdWG-fJs/https/t2.rbxcdn.com/05531021dfc8b1eeb9fdb1e884d47398")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(brandweerEmbed);

    } else if (args[1] == "4") {


        var rijkswaterstaatEmbed = new discord.MessageEmbed()
            .setTitle("Rijkswaterstaat training")
            .setColor("#f5c338")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Rijkswaterstaat" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/pXKSb5l1EvzFOGzUiy-0Ezeei-ay3S6XR6no0nBYWMI/https/www.informatiehuismarien.nl/publish/pages/113902/rijkswaterstaat.png")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(rijkswaterstaatEmbed);


    } else if (args[1] == "5") {


        var rechercheEmbed = new discord.MessageEmbed()
            .setTitle("Koninklijke Marechaussee training")
            .setColor("#2a4724")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Koninklijke Marechaussee" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/6iiWFEz90KZX8gme6GSlYAiV8Q9zoQMzCwcSHkNe8b0/https/upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Embleem_Koninklijke_Marechaussee.svg/1200px-Embleem_Koninklijke_Marechaussee.svg.png?width=331&height=475")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(rechercheEmbed);


    } else if (args[1] == "6") {

        var KoninklijkeMarechausseeEmbed = new discord.MessageEmbed()
            .setTitle("Dienst Speciale Interventies training")
            .setColor("#0514b3")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Dienst Speciale Interventies" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-2.discordapp.net/external/X8ISvAaoBw3na0WdMV6G4GzIVGKZu4WoKXHNjd9Ladk/https/upload.wikimedia.org/wikipedia/commons/thumb/0/00/Insigne_du_Dienst_Speciale_Interventies_%2528DSI%2529.svg/1200px-Insigne_du_Dienst_Speciale_Interventies_%2528DSI%2529.svg.png?width=475&height=475")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(KoninklijkeMarechausseeEmbed);



    } else if (args[1] == "7") {

        var DienstSpecialeInterventiesEmbed = new discord.MessageEmbed()
            .setTitle("Dienst Verkeerspolitie training")
            .setColor("#058db3")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Dienst Verkeerspolitie" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-1.discordapp.net/external/qqKUWaaKd_9hiqA3Rl4YcmlrdVLtgOJDHnWIbeddjhw/https/t2.rbxcdn.com/3e17b60c43147fed7f79e61e0adf8f0e")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(DienstSpecialeInterventiesEmbed);



    } else if (args[1] == "10") {


        var VerkeerspolitieEmbed = new discord.MessageEmbed()
            .setTitle("Verkeerspolitie training")
            .setColor("#271c54")
            .setFooter("Made by JustLol2006", "https://cdn.discordapp.com/attachments/725364599171579995/764477474553724938/unknown.png")
            .addFields(
                { name: "Dienst", value: "Verkeerspolitie" },
                { name: "Type-Training", value: `${options.TypeTraining}` },
                { name: "Host", value: `${message.author}` },
                { name: "Co-host", value: `${options.Hulp}` },
                { name: "Datum", value: `${options.Datum}` },
                { name: "Tijd", value: `${options.Tijd}` },
                { name: "Opmerkingen", value: `${options.Opmerkingen}` }
            )
            .setThumbnail("https://images-ext-1.discordapp.net/external/qqKUWaaKd_9hiqA3Rl4YcmlrdVLtgOJDHnWIbeddjhw/https/t2.rbxcdn.com/3e17b60c43147fed7f79e61e0adf8f0e")

        var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
        if (!channel) return message.reply("Dit kanaal bestaat niet")

        channel.send(VerkeerspolitieEmbed);


    }


}


module.exports.help = {
    name: "training"
}
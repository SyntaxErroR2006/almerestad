const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const subReddits = ["dankmemes", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const memeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Meme! r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)

    message.channel.send(memeEmbed);

}

module.exports.help = {
    name: "meme"
}
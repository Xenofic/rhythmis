const {EmbedBuilder} = require("discord.js")

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('I will not leave, unless ag says !');
    client.distube.voices.leave(message)
    const embed = new EmbedBuilder()
        .setTitle(`Leaving meh!`)
        .setColor("#CBA6F7")
        .setDescription(`I hope I can play more later!`)

    message.channel.send({embeds: [embed]});
};
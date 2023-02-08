const {EmbedBuilder} = require("discord.js")

module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if(!queue){
        let embed = new EmbedBuilder()
        .setTitle(`What music?`)
        .setDescription('If lost... use help!')
        .setColor("#CBA6F7")
        .setDescription(`I don't think there's music...`)

        return message.channel.send({embeds: [embed]});
    }
    const embed = new EmbedBuilder()
        .setTitle(`Finished loop!`)
        .setColor("#CBA6F7")
        .setDescription(`I am also bored...`)

    message.channel.send({embeds: [embed]});

    mode = queue.setRepeatMode(0)
};
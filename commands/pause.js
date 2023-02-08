const {EmbedBuilder} = require("discord.js");

module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if(!queue){
        const embed = new EmbedBuilder()
        .setTitle(`What music?`)
        .setDescription('If lost... use help!')
        .setColor("#CBA6F7")
        .setDescription(`I don't think there's music...`)

        return message.channel.send({embeds: [embed]});
    }
    if (queue.paused) {
        queue.resume()
        const embed = new EmbedBuilder()
            .setColor('#CBA6F7')
            .setTitle('Resume!')
            .setDescription('Resuming!')
            .setTimestamp()
            .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

        message.channel.send({ embeds: [embed] });
    }
    queue.pause()
    const embed = new EmbedBuilder()
        .setColor('#CBA6F7')
        .setTitle('I stopped!')
        .setDescription('Let me rest my throat plss!')
        .setTimestamp()
        .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    message.channel.send({ embeds: [embed] });
};
const {EmbedBuilder} = require("discord.js");
module.exports.run = async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    let channel = message.member.voice.channel;
    
        if(!channel){
            const embed = new EmbedBuilder()
            .setTitle(`Enter a voice channel there!`)
            .setColor("#CBA6F7")
            .setDescription(`That's not how it works!`)

            return message.channel.send({embeds: [embed]});
        }
        if(!queue){
            const embed = new EmbedBuilder()
            .setTitle(`Skip what?`)
            .setColor("#CBA6F7")
            .setDescription(`There is no music to skip ugh!`)

            return message.channel.send({embeds: [embed]});
        }

        try {
            const song = await queue.skip()
            const embed = new EmbedBuilder()
                .setColor('#CBA6F7')
                .setTitle('Next!')
                .setDescription('Jumping...')
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            message.channel.send({ embeds: [embed] });
        } catch (e) {
            const embed = new EmbedBuilder()
                .setColor('#CBA6F7')
                .setTitle('huh??')
                .setDescription(`No next...`)
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

            message.channel.send({ embeds: [embed] });

            queue.stop()
        }
  };
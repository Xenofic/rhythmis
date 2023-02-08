const {EmbedBuilder} = require("discord.js");

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

        let embed = new EmbedBuilder()
                .setTitle(`I stopped!`)
                .setColor("#CBA6F7")
                .setDescription(`Damn, why stop ?`)
                .setTimestamp()
                .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    
            message.channel.send({ embeds: [embed] });

        queue.stop()
        client.distube.voices.leave(message);
};
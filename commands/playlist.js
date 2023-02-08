const {EmbedBuilder} = require("discord.js");
const config = require('../config/config.json')

module.exports.run = async (client, message, args) => {
      if(args[0]===undefined) return message.channel.send(`Use ${config.prefix}playlist [link of playlist]`);
      if(!message.member.voice.channel){
        const embed = new EmbedBuilder()
          .setTitle(`Join a voice channel!!`)
          .setThumbnail('https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif')
          .setColor("#CBA6F7")
          .setDescription(`Where do you want me to play?`)
          return message.channel.send({embeds: [embed]});
      }else if(!(args[0].substring(-5, 32) ==='https://www.youtube.com/playlist')){
        const embed = new EmbedBuilder()
          .setTitle(`It's not a playlist!`)
          .setColor("#CBA6F7")
          .setDescription(`I need a real playlist link!`)
        return message.channel.send({embeds: [embed]});
      }
    const queue = client.distube.getQueue(message)

    client.distube.play(message.member.voice.channel, args.toString(), {
      member: message.member,
      textChannel: message.channel,
      message
    })
};
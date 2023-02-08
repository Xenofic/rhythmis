const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  if(args.length === 0){
    let embed = new EmbedBuilder()
    .setTitle(`Enter the channel name ! => Ex.: ${config.prefix}youtube [channel name]`)
    .setColor("#CBA6F7")
    message.channel.send({ embeds: [embed] })
    message.delete().catch(O_o => {});
  }else{
    let embed = new EmbedBuilder()
    .setTitle(`${args} on YouTube`)
    .setURL(`https://www.youtube.come/${args}`)
    .setColor("#CBA6F7")
    .setThumbnail('https://media.tenor.com/q3NBbq09nuYAAAAC/youtube-logo.gif')
    .setDescription(`Here is the result!`)
    message.channel.send({ embeds: [embed] })
    message.channel.send(`https://www.youtube.com/${args}`)
    message.delete().catch(O_o => {});
  }
}

// I dont know why this command exists, but it does.
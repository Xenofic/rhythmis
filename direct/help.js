const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  if(args[0] === '1'|| args[0] === undefined){
    const embed = new EmbedBuilder()
    .setColor('#CBA6F7')
    .setTitle('Help')
    .setAuthor(client.user.username)
    .setDescription('Commands')
    .setThumbnail('https://media.tenor.com/5FmfYNNPcwQAAAAS/dance-music.gif')
    .addFields(
      { name: `${config.prefix}website`,inline: true, value: 'See website!', inline: false },
      { name: `${config.prefix}invite`,inline: true, value: 'Bot invite information!', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Espero ter ajudado!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    return message.channel.send({ embeds: [embed] });
  }else if(args[0] === '2'){
    return message.reply('Use help');
  }
  return message.reply(`Use ${config.prefix}help`);
};
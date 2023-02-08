const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  let embed = new EmbedBuilder()
    .setColor('#CBA6F7')
    .setTitle('Website!')
    .setDescription('Wanna visit?')
    .setImage('')
    .addFields(
      { name: `Website:`,inline: true, value: '[https://juke.arunava.tech/](https://juke.arunava.tech/)', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: '🎈🎉', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    return message.channel.send({ embeds: [embed] });
};
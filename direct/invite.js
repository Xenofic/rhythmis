const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  let embed = new EmbedBuilder()
    .setColor('#CBA6F7')
    .setTitle('Hello, everything fine?')
    .setDescription('I am a bot that plays music, I have a lot of commands, I hope you enjoy!')
    .setImage('https://media.tenor.com/y4xV8nATdXgAAAAC/aharen-san-aharen-san-rap.gif')
    .addFields(
      { name: `Invite me!`,inline: true, value: '[Link](https://juke.arunava.tech)', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: '🎈🎉', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
    return message.channel.send({ embeds: [embed] });
};
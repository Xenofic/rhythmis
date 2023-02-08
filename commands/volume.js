const {EmbedBuilder} = require("discord.js")

module.exports.run = async (client, message, args) => {
  const queue = client.distube.getQueue(message)
  if(!queue){
    const embed = new EmbedBuilder()
      .setTitle(`There's Nothing Rolling!`)
      .setColor("#CBA6F7")
      .setDescription(`I'm not playing anything for that...`)

      return message.channel.send({embeds: [embed]});
  }

  if(isNaN(args[0])) return message.reply("This is not a valid value!");
  const vol = parseInt(args[0])
  if(args[0] > 100||args[0] < 0) return message.reply("Volume needs to be between 0 and 100!");
  queue.setVolume(vol)
    let volume = '|';
    const embed = new EmbedBuilder()
      .setTitle(`Volume!`)
      .setColor("#CBA6F7")
      .setDescription(`Volume Changed!`)
      .addFields(
          { name: `Volume:`,inline: true, value: `${volume.repeat(args[0])} ${args[0]}%`, inline: false },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });
      
    message.channel.send({embeds: [embed]});
};
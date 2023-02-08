const {EmbedBuilder} = require("discord.js")
const config = require("../config/config.json")

module.exports.run = async (client) => {
  client.emotes = config.emoji
client.distube
  .on('playSong', (queue, song) => {
    const embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('Playing music!')
      .setDescription('🎶🎵')
      .setThumbnail(song.thumbnail)
      .addFields(
        { name: `Music:`,inline: true, value: `${song.name}`, inline: false },
        { name: `Author:`,inline: true, value: `${song.uploader.name}`,inline: false },
        { name: `Duration:`,inline: true, value: `${song.formattedDuration}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('addSong', (queue, song) => {
    const embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('yay..one more added!')
      .setDescription('I am on queue 😉')
      .addFields(
        { name: `Music:`,inline: true, value: `${song.name}`, inline: false },
        { name: `Author:`,inline: true, value: `${song.uploader.name}`,inline: false },
        { name: `Duration:`,inline: true, value: `${song.formattedDuration}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('addList', (queue, playlist) => {
    const embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('Playlist!')
      .setURL(playlist.url)
      .setDescription('I am on queue 😉')
      .setThumbnail(playlist.thumbnail)
      .addFields(
        { name: `Name from Playlist:`,inline: true, value: `${playlist.name}`, inline: false },
        { name: `Amount:`,inline: true, value: `${playlist.songs.length}`,inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
  .on('error', (channel, e) => {
    if (channel) channel.send(`${client.emotes.error} | Something went wrong...`)
    else console.error(e)
  })
  .on('empty', channel => {
    console.log("Disconnected from " + channel.guild.name + "  because there are no more members in the voice channel!")
  })
  .on('searchNoResult', (message, query) =>
    message.channel.send(`${client.emotes.error} | No results found for ${query}! `)
  )
  .on('finish', queue => {
    const embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('Finished!')
      .setDescription('I am leaving the channel... ')
      .setTimestamp()
      .setFooter({ text: '🎶', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

    queue.textChannel.send({ embeds: [embed] });
  })
}
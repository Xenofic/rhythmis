const { EmbedBuilder, Guild } = require("discord.js");
const config = require('../config/config.json');

module.exports.run = async (client, message, args) => {
  if(args[0] === '1'|| args[0] === undefined){
    let embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('Help')
      .setDescription('Commands!')
      .setThumbnail('https://media.tenor.com/5FmfYNNPcwQAAAAS/dance-music.gif')
      .addFields(
        { name: `${config.prefix}play [music]`,inline: true, value: 'Play a song!', inline: false },
        { name: `${config.prefix}pause`,inline: true, value: 'Pause music playback!',inline: false },
        { name: `${config.prefix}resume`,inline: true, value: 'Resumes playback of a song!',inline: false  },
        { name: `${config.prefix}volume [0-100]`,inline: true, value: 'Set music volume!',inline: false  },
        { name: `${config.prefix}playlist [link]`,inline: true, value: 'Play a playlist!',inline: false  },
        { name: `${config.prefix}skip`,inline: true, value: 'Skip a track!',inline: false  },
        { name: `${config.prefix}stop`,inline: true, value: 'Stop the music!',inline: false  },
        { name: `${config.prefix}loop`,inline: true, value: 'Repeat the music that is playing!',inline: false  },
        { name: `${config.prefix}stoploop`,inline: true, value: 'Stops the music from repating anymore!',inline: false },
        { name: `${config.prefix}help 2`,inline: true, value: 'Few more super powerful commands for developement',inline: false },
      )
      .setTimestamp()
      .setFooter({ text: 'Hope this helps!', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

      return message.channel.send({ embeds: [embed] });
  }else if(args[0] === '2'){
    let embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle('Help')
      .setDescription('Commands!')
      .setThumbnail('https://media.tenor.com/p_q9HjxmD2oAAAAC/gojo-daddy.gif')
      .addFields(
        { name: `${config.prefix}help [1-2]`,inline: true, value: 'See list of commands!', inline: false },
        { name: `${config.prefix}ping`,inline: true, value: 'Check bot latency!',inline: false  },
        { name: `${config.prefix}youtube [Name of channel]`,inline: true, value: 'Search for a channel on youtube!',inline: false  },
        { name: `${config.prefix}prefix [new prefix for guild]`,inline: true, value: 'Command for admins only!',inline: false  },
        { name: `${config.prefix}bug [Report some bug]`,inline: true, value: 'Command for admins only!',inline: false  },
      )
      .setTimestamp()
      .setFooter({ text: 'Still confused ? Ping ag.', iconURL: `${client.user.displayAvatarURL({format: "png"})}` });

      return message.channel.send({ embeds: [embed] });
  }
  return message.reply(`Use ${config.prefix}help [1-2]`);
};
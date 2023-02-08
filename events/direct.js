const {EmbedBuilder} = require("discord.js");
const config = require('../config/config.json');//Config 
const fs = require('fs');

module.exports.run = async (client) => {
    const prefix2 = [];
    setInterval(function(){  
      getPrefix();
    }, 1000);
    const prefixId = (indice,id) => {
      //Get prefix and save prefix
      fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
        if (err2) {
          throw err2;
        }else{
          const obj2 = JSON.parse(data2);
          prefix2[id] = obj2.prefix[indice];
          return;
        }
      });
    }
    const getPrefix = () =>{
      fs.readFile('./config/guild/guild.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }else{
          const obj = JSON.parse(data);
          //if id!=obj.id
          for(let i in obj.id){
            prefixId(i,obj.id[i]);
          } 
        }
      });
    }
    client.on('messageCreate', message => {
      if (message.author.bot) return;
      if (message.channel.type === 'DM'){
        if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return message.reply(`Use ${config.prefix}help !`);
        const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
        const command = args.shift().toLowerCase();
        try {
          const commandFile = require(`../direct/${command}.js`)
          commandFile.run(client, message, args);
        } catch (err) {
          const embed = new EmbedBuilder()
            .setColor('#CBA6F7')
            .setTitle('I do not recognize this command!')
            .setThumbnail('https://media.tenor.com/Gv1cMkqev0wAAAAC/anime-confused.gif')
            .setDescription(` \`${config.prefix}help\` to see all commands!`)

          message.channel.send({ embeds: [embed] })
        }
      }
  });
}
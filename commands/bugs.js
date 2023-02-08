const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message ,args) => {
  console.log(message.author)
  if(message.author.username!='Arunava'&&message.author.discriminator!=1288){
    let embed = new EmbedBuilder()
    .setColor('#CBA6F7')
    .setTitle(' Impossible !')
    .setThumbnail('https://media.tenor.com/VNpvfgIEncUAAAAC/gojou-jujutsu.gif')
    .setDescription(`You are weak... you lack permission!`)

    return message.channel.send({ embeds: [embed] })
  };
  fs.readFile('./config/guild/bugs.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }else{
        const obj = JSON.parse(data);
        if(obj.bugs.length<1){
          return message.channel.send('No bugs reported!');
        }
        for (let i in obj.bugs)    
        {
          let embed = new EmbedBuilder()
            .setColor('#CBA6F7')
            .setTitle(`Bug`)
            .setDescription(`${obj.bugs[i]}`)

            message.channel.send({ embeds: [embed] })
        } 
    }
  });
}
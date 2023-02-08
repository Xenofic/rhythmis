const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    if(args[0]===undefined){
        return message.channel.send('Choose a prefix! For example: prefix +');
    }
    if(!message.member.permissions.has('KICK_MEMBERS')){
      let embed = new EmbedBuilder()
      .setColor('#CBA6F7')
      .setTitle(' Impossible !')
      .setThumbnail('https://media.tenor.com/VNpvfgIEncUAAAAC/gojou-jujutsu.gif')
      .setDescription(`You are weak... you lack permission!`)

        return message.channel.send({ embeds: [embed] })
    };
  const savePrefix = (prefixGuild, indice) => {
    //Get prefix and save prefix
    fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
      if (err2) {
        throw err2;
      }else{
        const obj2 = JSON.parse(data2);
        obj2.prefix[indice]=prefixGuild;
        const objW2 = JSON.stringify(obj2);
        fs.writeFile('./config/guild/prefix.json', objW2, 'utf-8',() => {});
        let embed = new EmbedBuilder()
          .setColor('#CBA6F7')
          .setTitle('Guild Prefix Changed!')
          .setDescription(`The new prefix is ${obj2.prefix[indice]}`)

          message.channel.send({ embeds: [embed] })
          message.delete().catch(O_o => {});
      }
    });
  }
  const prefix3 = args[0];
  //Get id and save id
  const prefixSave = () =>{
    fs.readFile('./config/guild/guild.json', 'utf-8', (err, data) => {
      if (err) {
          throw err;
      }else{
        const obj = JSON.parse(data);
        //if id!=obj.id
        for(let i in obj.id){
          if(obj.id[i]===message.guildId){
            savePrefix(prefix3,i);
            return;
          }
        }
        obj.id.push(message.guildId);
        const objW = JSON.stringify(obj);
        fs.writeFile('./config/guild/guild.json', objW, 'utf-8',() => {});
        //Get prefix and save prefix
        fs.readFile('./config/guild/prefix.json', 'utf-8', (err2, data2) => {
          if (err2) {
              throw err2;
          }else{
            const obj2 = JSON.parse(data2);
            obj2.prefix.push(prefix3);
            const objW2 = JSON.stringify(obj2);
            fs.writeFile('./config/guild/prefix.json', objW2, 'utf-8',() => {});
            let embed = new EmbedBuilder()
              .setColor('#CBA6F7')
              .setTitle('Guild Prefix Changed!')
              .setDescription(`The new prefix is ${prefix3}`)

              message.channel.send({ embeds: [embed] })
              message.delete().catch(O_o => {});
          }
        });
      }
    });
  }
  prefixSave();
};
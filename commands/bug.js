const { EmbedBuilder, KICK_MEMBERS } = require("discord.js");
const fs = require('fs');

module.exports.run = async (client, message ,args) => {
  if(!message.member.permissions.has('KICK_MEMBERS')){
    let embed = new EmbedBuilder()
    .setColor('#CBA6F7')
    .setTitle(' Impossible !')
    .setThumbnail('https://media.tenor.com/VNpvfgIEncUAAAAC/gojou-jujutsu.gif')
    .setDescription(`You are weak... you lack permission!`)
    return message.channel.send({ embeds: [embed] })
  };
  if(args.length<4){
    return message.channel.send('Message must be at least four words long!');
  }
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  dataAtual = '\n**Data:** ' + dia + '/' + mes + '/' + ano + '\n';
  autor = `**Author:** ${message.member.user.username}#${message.member.user.discriminator}\n`;
  text = `**Bug:** ${args.join(` `)} ${dataAtual}`;
  fs.readFile('./config/guild/bugs.json', 'utf-8', (err, data) => {
      if (err) {
          throw err;
      }else{
        const obj = JSON.parse(data);
        obj.bugs.push(autor+text);
        const objW = JSON.stringify(obj);
        fs.writeFile('./config/guild/bugs.json', objW, 'utf-8',() => {});
        let embed = new EmbedBuilder()
          .setColor('#CBA6F7')
          .setTitle('successfully reported bug!')
          .setThumbnail('https://calculojuridico.com.br/assets/images/2021_04_14_contratacao_escritorios.gif')
          .setDescription(`Um bug? ugh more work...`)

          return message.channel.send({ embeds: [embed] })
      }
  });
}
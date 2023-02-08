const config = require('../config/config.json');
const { ActivityType } = require('discord.js');

module.exports.run = async (client) => {
  client.on("ready", () => {
    client.user.setActivity('arunava.tech', { type: ActivityType.Watching });

    console.log("------------------------\r\nDeveloper: Arunava#1288\r\nGitHub: github.com\/its-ag\r\n------------------------\r\nBot is Online !\r\n------------------------");
  });
};
module.exports.run = async (client, message, args) => {
    const m = await message.channel.send('remember ag?');
  
    m.edit(`🏓 **| Pong!**\nServer Latency: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\nAPI latency: **${Math.round(
        client.ws.ping
      )}ms**`
    );
  };
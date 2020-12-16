const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
  if (cooldown.has(msg.author.id)) {
    msg
      .reply(
        `You need to wait ${config.COOLDOWN} minutes to use this command again!`
      )
      .then(m => {
        msg.delete();

        setTimeout(() => {
          m.delete();
        }, 5000);
      });
  } else {
    fs.readFile("./stock/hulu.txt", "utf8", function(err, data) {
      if (err) throw err;

      data = data + "";
      var lines = data.split("\n");
      let account = lines[Math.floor(Math.random() * 1)];

      fs.writeFile("./stock/hulu.txt", lines.slice(1).join("\n"), function(
        err
      ) {
        if (err) throw err;
      });

      let embed = new Discord.RichEmbed()
        .addField("🏓 Account", `\n\`${account}\``)
        .addField("🔗 Links", "[Support Server](https://discord.gg/)")
        .setThumbnail("https://i.imgur.com/GwgkSC4.png")
        .setColor("RANDOM")
        .setFooter("Helix Network")
        .setTimestamp();

      msg.author.send(embed);

      let reply = new Discord.RichEmbed()
        .addField("✅ Generated", "**Check Your DMs!**")
        .addField("🔗 Links", "[Support Server](https://discord.gg/)")
        .setThumbnail("https://i.imgur.com/GwgkSC4.png")
        .setColor("RANDOM")
        .setFooter("Helix Network")
        .setTimestamp();

      msg.channel.send(reply).then(m => {
        setTimeout(() => {
          m.delete();
        }, 900000);
      });

      cooldown.add(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, config.COOLDOWN * 60 * 1000);
    });
  }
};

module.exports.help = {
  name: `vbucks`,
  description: `description`
};

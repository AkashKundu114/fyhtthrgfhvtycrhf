const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Accounts Stock")
    .addField("Amazon", "`5000`", true)
    .addField("Disney", "`5000`", true)
    .addField("Fortnite", "`5000`", true)
    .addField("Itunes", "`5000`", true)
    .addField("Hulu", "`5000`", true)
    .addField("Minecraft", "`5000`", true)
    .addField("Netflix", "`5000`", true)
    .addField("Nitro", "`5000`", true)
    .addField("Nord", "`5000`", true)
    .addField("PSN", "`5000`", true)
    .addField("Roblox", "`5000`", true)
    .addField("Spotify", "`5000`", true)
    .addField("Steam", "`5000`", true)
    .addField("VBucks", "`5000`", true)
    .addField("Xbox", "`5000`", true)
    .setThumbnail("")
    .setFooter("")
    .setTimestamp();
  message.channel.send(embed);
};
module.exports.help = {
  name: "help"
};

const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#0x9700f5")
    .setTitle("Accounts Stock")
    .addField("Amazon", "`5000`", true)
    .addField("Disney", "`5000`", true)
    .addField("Fortnite", "`5000`", true)
    .addField("Itunes", "`5000`", true)
    .addField("Hulu", "`5000`", true)
    .addField("Minecraft", "`5000`", true)
    .addField("Netflix", "`5000true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .addField("Amazon", "`5000`", true)
    .setThumbnail("")
    .setFooter("Accounts Generator")
    .setTimestamp();
  message.channel.send(embed);
};
module.exports.help = {
  name: "help"
};

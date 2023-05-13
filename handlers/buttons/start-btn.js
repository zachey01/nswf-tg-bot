const { Telegraf } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");

module.exports = async (ctx) => {
  const keyboard = Keyboard.make([
    ["/images", "/videos"], // First row
  ]);
  ctx.replyWithMarkdown(
    "Hi, " +
      ctx.message.from.first_name +
      ". By browsing the content below you confirm that you are over *18 years old*. Here you can find a variety of hentai/yaoi content! 🔞",
    keyboard.reply()
  );
};

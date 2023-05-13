const { Telegraf } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");

module.exports = async (ctx) => {
  const keyboard = Keyboard.make([
    ["/yaoi_img", "/hentai_img"], // First row
    ["/trap_img", "/back"], // Second row
  ]);
  await ctx.reply("Choose!", keyboard.reply());
};

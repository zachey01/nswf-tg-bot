const fs = require("fs");
const path = require("path");
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { Keyboard } = require("telegram-keyboard");
const axios = require("axios");
const bot = new Telegraf(process.env.TELEGTAM_TOKEN);
// Кequire сommands
let nswfYaoiImg = require("./commands/nswf/yaoi-img");
let nswfTrapImg = require("./commands/nswf/trap-img");
let nswfHentaiImg = require("./commands/nswf/hentai-img");
let buttons = require("./handlers/buttons/start-btn");

// Сommands
bot.command("yaoi_img", nswfYaoiImg);
bot.command("trap_img", nswfTrapImg);
bot.command("hentai_img", nswfHentaiImg);
bot.start(buttons);

// Buttons
bot.command("nswf", async (ctx) => {
  const keyboard = Keyboard.make([
    ["/yaoi_img", "/hentai_img"], // First row
    ["/trap_img", "/yaoi_videos"], // Second row
  ]);
  await ctx.reply("Simple built-in keyboard", keyboard.reply());
  await ctx.reply("Simple inline keyboard", keyboard.inline());
});
bot.launch();

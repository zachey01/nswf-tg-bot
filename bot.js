const { Telegraf } = require("telegraf");
const { Keyboard } = require("telegram-keyboard");
const axios = require("axios");
const bot = new Telegraf(process.env.TELEGTAM_TOKEN);
// Require сommands
let nswfYaoiImg = require("./commands/nswf/yaoi-img");
let nswfTrapImg = require("./commands/nswf/trap-img");
let nswfHentaiImg = require("./commands/nswf/hentai-img");
let startBtn = require("./handlers/buttons/start-btn");
let nswfImagesBtn = require("./handlers/buttons/nswfImages-btn");

// Сommands
bot.start(startBtn);
bot.command("back", startBtn);
bot.command("yaoi_img", nswfYaoiImg);
bot.command("trap_img", nswfTrapImg);
bot.command("hentai_img", nswfHentaiImg);
bot.command("images", nswfImagesBtn);
bot.command("videos", (ctx) => ctx.reply("coming soon..."));
// Launch
bot.launch();

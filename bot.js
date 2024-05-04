const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGTAM_TOKEN);

let nswfYaoiImg = require("./commands/nswf/yaoi-img");
let nswfTrapImg = require("./commands/nswf/trap-img");
let nswfHentaiImg = require("./commands/nswf/hentai-img");
let startBtn = require("./handlers/buttons/start-btn");
let nswfImagesBtn = require("./handlers/buttons/nswfImages-btn");

bot.start(startBtn);
bot.command("back", startBtn);
bot.command("yaoi_img", nswfYaoiImg);
bot.command("trap_img", nswfTrapImg);
bot.command("hentai_img", nswfHentaiImg);
bot.command("images", nswfImagesBtn);
bot.command("videos", (ctx) => ctx.reply("coming soon..."));

bot.launch();

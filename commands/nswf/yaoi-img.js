const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const r34API = require("r34.api");

module.exports = async (ctx) => {
  let image = await r34API.rule34(["yaoi"]);
  return ctx.replyWithPhoto(image.replace(/"/gi, ""));
};

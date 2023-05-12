const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const axios = require("axios");

module.exports = async (ctx) => {
  axios.get("https://api.waifu.pics/nsfw/trap", {}).then(function (response) {
    return ctx.replyWithPhoto(response.data.url);
  });
};

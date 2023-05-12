const axios = require("axios");

module.exports = async (ctx) => {
  axios
    .get("https://api.night-api.com/images/nsfw/hentai", {
      headers: {
        authorization: process.env.NIGHT_API_TOKEN,
      },
    })
    .then(function (response) {
      return ctx.replyWithPhoto(response.data.content.url);
    });
};

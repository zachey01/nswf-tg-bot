const nswfparse = require("nswfparse");

module.exports = async (ctx) => {
  nswfparse.reddit.hentai
    .yaoi()
    .then((payload) => {
      return ctx.replyWithPhoto(payload.url);
    })
    .catch((error) => {
      console.error(error);
    });
};

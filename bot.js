const TelegramBot = require('node-telegram-bot-api');
const token = '5797375523:AAGhEbPr-Q3tbJ_8F6DFEZjnnzsFlzpBvs4';
const Tesseract = require('tesseract.js');
const bot = new TelegramBot(token, {
    polling: true
});


/* bot.on('polling_error', function (error) {
    console.log(error);
}); */
/* 
bot.onText(/^\/start/, function (msg) {
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name;

    bot.sendMessage(chatId, `Hola ${nameUser} !`);
}); */

bot.onText(/^[0-9]* \w*/, function (msg) {
    var chatId = msg.chat.id;
    const opts = {
        reply_to_message_id: msg.message_id,
        one_time_keyboard: true
      };
    bot.sendMessage(chatId, `Recibido`, opts);
    /*const params = msg.text.split(' ');
     if(!params || params.length != 3) {
        bot.sendMessage(chatId, `Formato incorrecto`, opts);
        bot.sendMessage(chatId, `El formato debe ser:\n Apostado numero_juego nombre_jugador`);
    } else {
        bot.sendMessage(chatId, `Recibido`, opts);
    }  */   
});
/* 
bot.on('callback_query', (query) => {
console.log('query', query)
}) */



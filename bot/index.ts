import TelegramBot = require('node-telegram-bot-api')

import * as dotenv from 'dotenv'
dotenv.config()

// const webApp = 'https://egor-oop.github.io/telegram_app/'
const bot = new TelegramBot(process.env.BOT_TOKEN || '', { polling: true })

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === '/start') {
    await bot.sendMessage(chatId, `I offer you to open provided application`)
  }
})

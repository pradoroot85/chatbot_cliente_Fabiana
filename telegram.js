
const {token, email, senha, debug, valor, mode_server} = require("./settings.json");
const TelegramBot = require('node-telegram-bot-api');
const puppeteer = require("puppeteer");
const options = {polling:debug[0]};

const bot = new TelegramBot(token, options, {polling:debug[0]});
//comando start
bot.onText(/\/start/, (msg) => {
  const image = "./images.png"
  bot.sendPhoto(msg.chat.id, image,{caption : "🤖 Olá Fabiana!",
  "reply_markup": {
    "keyboard": [["MONITORAR FILA","SAQUE AUTOMÁTICO"], ["INSERIR VALOR SAQUE","SALDO"],["LOGAR"],["CHAMADO"]]
  }
  });
}); 
//comando saque 
bot.on('message', (msg) => {
  if (msg.text === "SAQUE AUTOMÁTICO") {
    bot.sendMessage(msg.chat.id,"🤖 click no valor a ser sacado.↕️",{"reply_markup": {
      "keyboard": [["20.00", "25.00"], ["30.00","35.00"],["40.00","42.00"],["VOLTAR MENU"]] 
    }
  });
}
});
//comando voltar
  bot.on('message', (msg) => {
    if(msg.text === "VOLTAR MENU"){
      const image = "./images.png"
      bot.sendPhoto(msg.chat.id, image,{caption : "🤖 Olá Fabiana!","reply_markup": {
        "keyboard": [["MONITORAR FILA","SAQUE AUTOMÁTICO"],["INSERIR VALOR SAQUE","SALDO"],["LOGAR"],["CHAMADO"]]
      }
    });
    }
  });
//comando valor 20
bot.on('message', (msg) => {
if(msg.text === valor[0]){
  bot.sendMessage(msg.chat.id, "aguarde...⏳");
  async function robô(){
      const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
      const page = await browser.newPage();
      await page.goto("https://moneyonlineinvestment.com/login.php")
      await page.type("#login_email", email[1], {delay:30});
      await page.type("#login_password", senha[1], {delay:30});
      await page.click("#login_btn");
      await page.waitForTimeout(3000)
      await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
      await page.waitForTimeout(3000)
      const espera = await page.$(".box_type1")
      if(espera){
        bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
      }else{
      await page.waitForSelector("body")
      await page.type("#withdraw_usd", valor[0])
      await page.click(".btn.btn-primary.btn-lg")
      await page.waitForTimeout(3000)
      await page.click(".btn.btn-success.btn-lg")
        bot.sendMessage(msg.chat.id, "Saque realizado ✅");
      await page.screenshot({path:"./saque.png"})
      const saque = "./saque.png"
        bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[0]}, saque concluido em até 15 dias ok`})
      }
      await browser.close();
     }robô();
   }
});
//comando valor 25
bot.on('message', (msg) => {
  if(msg.text === valor[1]){
    bot.sendMessage(msg.chat.id, "aguarde...⏳");
    async function robô(){
        const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:30});
        await page.type("#login_password", senha[1], {delay:30});
        await page.click("#login_btn");
        await page.waitForTimeout(3000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
        }else{
        await page.waitForSelector("body")
        await page.type("#withdraw_usd", valor[1])
        await page.click(".btn.btn-primary.btn-lg")
        await page.waitForTimeout(3000)
        await page.click(".btn.btn-success.btn-lg")
          bot.sendMessage(msg.chat.id, "Saque realizado ✅");
        await page.screenshot({path:"./saque.png"})
        const saque = "./saque.png"
          bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[1]}, saque concluido em até 15 dias ok`})
        }
        await browser.close();
       }robô();
     }
  });
//comando valor 30
bot.on('message', (msg) => {
  if(msg.text === valor[2]){
    bot.sendMessage(msg.chat.id, "aguarde...⏳");
    async function robô(){
        const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:30});
        await page.type("#login_password", senha[1], {delay:30});
        await page.click("#login_btn");
        await page.waitForTimeout(3000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
        }else{
        await page.waitForSelector("body")
        await page.type("#withdraw_usd", valor[2])
        await page.click(".btn.btn-primary.btn-lg")
        await page.waitForTimeout(3000)
        await page.click(".btn.btn-success.btn-lg")
          bot.sendMessage(msg.chat.id, "Saque realizado ✅");
        await page.screenshot({path:"./saque.png"})
        const saque = "./saque.png"
          bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[2]}, saque concluido em até 15 dias ok`})
        }
        await browser.close();
       }robô();
     }
  });
//comando valor 35
bot.on('message', (msg) => {
  if(msg.text === valor[3]){
    bot.sendMessage(msg.chat.id, "aguarde...⏳");
    async function robô(){
        const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:30});
        await page.type("#login_password", senha[1], {delay:30});
        await page.click("#login_btn");
        await page.waitForTimeout(3000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
        }else{
        await page.waitForSelector("body")
        await page.type("#withdraw_usd", valor[3])
        await page.click(".btn.btn-primary.btn-lg")
        await page.waitForTimeout(3000)
        await page.click(".btn.btn-success.btn-lg")
          bot.sendMessage(msg.chat.id, "Saque realizado ✅");
        await page.screenshot({path:"./saque.png"})
        const saque = "./saque.png"
          bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[3]}, saque concluido em até 15 dias ok`})
        }
        await browser.close();
       }robô();
     }
  });
//comando valor 40
bot.on('message', (msg) => {
  if(msg.text === valor[4]){
    bot.sendMessage(msg.chat.id, "aguarde...⏳");
    async function robô(){
        const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:30});
        await page.type("#login_password", senha[1], {delay:30});
        await page.click("#login_btn");
        await page.waitForTimeout(3000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
        }else{
        await page.waitForSelector("body")
        await page.type("#withdraw_usd", valor[4])
        await page.click(".btn.btn-primary.btn-lg")
        await page.waitForTimeout(3000)
        await page.click(".btn.btn-success.btn-lg")
          bot.sendMessage(msg.chat.id, "Saque realizado ✅");
        await page.screenshot({path:"./saque.png"})
        const saque = "./saque.png"
          bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[4]}, saque concluido em até 15 dias ok`})
        }
        await browser.close();
       }robô();
     }
  });
//comando valor 42
bot.on('message', (msg) => {
  if(msg.text === valor[5]){
    bot.sendMessage(msg.chat.id, "aguarde...⏳");
    async function robô(){
        const browser = await puppeteer.launch({headless:debug[0], defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:30});
        await page.type("#login_password", senha[1], {delay:30});
        await page.click("#login_btn");
        await page.waitForTimeout(3000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda estámos na fila aguarde!")
        }else{
        await page.waitForSelector("body")
        await page.type("#withdraw_usd", valor[5])
        await page.click(".btn.btn-primary.btn-lg")
        await page.waitForTimeout(3000)
        await page.click(".btn.btn-success.btn-lg")
          bot.sendMessage(msg.chat.id, "Saque realizado ✅");
        await page.screenshot({path:"./saque.png"})
        const saque = "./saque.png"
          bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${valor[5]}, saque concluido em até 15 dias ok`})
        }
        await browser.close();
       }robô();
     }
  });
//comando inserir valor saque
bot.on("message", (msg)=>{
if(msg.text === "INSERIR VALOR SAQUE"){
   bot.sendMessage(msg.chat.id, "🤖😊Insira o valor de saque como no exemplo:(Sacar 22.00) e aperte (enter) , não esqueça do (S) maiusculo no inicio e o ponto ok.");
  }
});
bot.onText(/Sacar/,(msg)=>{
      const valor_saque = msg.text
      const limpo = valor_saque.slice(5, 11)
      bot.sendMessage(msg.chat.id, "aguarde...⏳");
      async function robô(){
        const browser = await puppeteer.launch({headless:debug[0],defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:40});
        await page.type("#login_password", senha[1], {delay:40});
        await page.click("#login_btn");
        await page.waitForTimeout(4000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        
        if(espera){
            const fila = "./fila.png"
            await page.screenshot({path:"./fila.png"})
            bot.sendMessage(msg.chat.id, "🤖⚠️ Ainda não podemos sacar ok!")
            bot.sendPhoto(msg.chat.id, fila)
        }else{
            await page.waitForSelector("body")
            await page.type("#withdraw_usd", limpo)
            await page.click(".btn.btn-primary.btn-lg")
            await page.waitForTimeout(3000)
            await page.click(".btn.btn-success.btn-lg")
            bot.sendMessage(msg.chat.id, `🤖 Saque de $${limpo} realizado ✅`);
            await page.screenshot({path:"./saque.png"})
            const saque = "./saque.png"
            bot.sendPhoto(msg.chat.id, saque, {caption:`🤖⚠️você sacou $${limpo}, saque concluido em até 15 dias ok`})
            
        }
        await browser.close();
    }robô();
});
//comando saldo
bot.on("message",(msg)=>{
if(msg.text === "SALDO") {
     bot.sendMessage(msg.chat.id, "aguarde...⏳")
     async function robô(){
     const browser = await puppeteer.launch({headless:debug, defaultViewport:null, args:[mode_server]});
     const page = await browser.newPage();
     await page.goto("https://moneyonlineinvestment.com/login.php",{timeout:0});
     await page.type("#login_email", email[1], {delay:30});
     await page.type("#login_password", senha[1], {delay:30});
     await page.click("#login_btn");
     await page.waitForTimeout("3000");
     await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
     const espera = await page.$(".box_type1")
     if(espera){
        const espera_saldo = await page.evaluate(()=>{
              var valor = document.querySelector(".balance1.notranslate").innerText
              return valor                
      });
        const fila = "./fila.png"
        await page.screenshot({path:"./fila.png"})
        bot.sendMessage(msg.chat.id, `🤖Seu saldo e de ${espera_saldo}, você está na fila de retirada aguarde até a conclusão do saque!`)
        bot.sendPhoto(msg.chat.id, fila)
     }else{
        const saldo = await page.evaluate(()=>{
            var valor = document.getElementById("intro_top_alert").innerText
                return valor.slice(113, 132)                 
               });
    bot.sendMessage(msg.chat.id, `🤖 Saldo ${saldo} 💵`);
    await page.screenshot({path:"./saldo.png"})
    const dolar = "./saldo.png"
    bot.sendPhoto(msg.chat.id, dolar)
        }
    await browser.close();
       }robô();
     }
  });
     
  bot.on('message', (msg) => {
    if(msg.text === "MONITORAR FILA"){
      bot.sendMessage(msg.chat.id, "aguarde...⏳")
      async function robô(){
        const browser = await puppeteer.launch({headless:debug[0],defaultViewport:null, args:[mode_server]});
        const page = await browser.newPage();
        await page.goto("https://moneyonlineinvestment.com/login.php")
        await page.type("#login_email", email[1], {delay:40});
        await page.type("#login_password", senha[1], {delay:40});
        await page.click("#login_btn");
        await page.waitForTimeout(4000)
        await page.goto("https://moneyonlineinvestment.com/acc_withdraw.php", {timeout:0});
        await page.waitForTimeout(3000)
        const espera = await page.$(".box_type1")
        if(espera){
          await page.screenshot({path:"./monitor.png"})
          const vigia = "./monitor.png"
          bot.sendMessage(msg.chat.id, "🤖 Parece que ainda estámos na fila.")
            bot.sendPhoto(msg.chat.id, vigia)

        }else{
          await page.screenshot({path:"./monitor1.png"})
          const vigia1 = "./monitor1.png"
          bot.sendMessage(msg.chat.id, "🤖 Já podemos fazer saques ok.")
          bot.sendPhoto(msg.chat.id, vigia1)
            
        }
        await browser.close();
    }robô();
  }
});
bot.on('message', (msg) => {
  if(msg.text === "LOGAR"){
    const link = "https://neon-manatee-8cd6ee.netlify.app"
    bot.sendMessage(msg.chat.id, `🤖 Olá Fabiana clicando aqui ${link}, abre um painel, nesse painel você tem a opção de trocar de conta na Money Online Investiment ou logar de novo ok.`);
   }
});
bot.on('message', (msg) => {
  if(msg.text === "CHAMADO"){
    const link1 = "https://wa.me/message/THNK3NQ7R3XMJ1"
    bot.sendMessage(msg.chat.id, `🤖 Fabiana clicando aqui ${link1}, você e direcionada pará o whatsapp do desenvolvedor do robô, pará duvidas`);
  }
});
console.log("Seu robô está online Fabiana.")

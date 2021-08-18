const { Client } = require("discord.js");
const cfg = require("./config.json");
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require('discord-buttons');
const client = new Client({ disableMentions: "everyone", ignoreDirect: true, ignoreRoles: true, fetchAllMembers: true, _tokenType: "Bot" });
require('discord-buttons')(client)


client.on("message", async(msg) => {
if (msg.author.id === cfg.Bot.Owner) {
 if (msg.content === "!menü-add") {
  const seçenek1 = new MessageMenuOption().setLabel('Lovers').setEmoji('💍').setValue('Lovers').setDescription('Lovers rolünü üstüne al.')
  const seçenek2 = new MessageMenuOption().setLabel('Alone').setEmoji('💔').setValue('Alone').setDescription('Alone rolünü üstüne al.')      
  const seçenek3 = new MessageMenuOption().setLabel('LGBT').setEmoji('🌈').setValue('LGBT').setDescription('LGBT rolünü üstüne al.')     
  const select = new MessageMenu()
    .setID('select1')
    .setPlaceholder('Bir rol seç')
    .addOption(seçenek1)
    .addOption(seçenek2)
    .addOption(seçenek3)
    .setMaxValues(1)
    .setMinValues(1)
 const Row1 = new MessageActionRow()
 .addComponent(select)   

await msg.channel.send('**Menü: Sunucu Rolleri**', { components: [Row1] }); 
 } else if (msg.content === "!menü-remove") {
   const seçenek1 = new MessageMenuOption().setLabel('Lovers').setEmoji('💍').setValue('Lovers').setDescription('Lovers rolünü üstünden çıkar.')
   const seçenek2 = new MessageMenuOption().setLabel('Alone').setEmoji('💔').setValue('Alone').setDescription('Alone rolünü üstünden çıkar.')      
   const seçenek3 = new MessageMenuOption().setLabel('LGBT').setEmoji('🌈').setValue('LGBT').setDescription('LGBT rolünü üstünden çıkar.')     
   const select = new MessageMenu()
    .setID('select1')
    .setPlaceholder('Bir rol seç')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(seçenek1)
    .addOption(seçenek2)
    .addOption(seçenek3)

 const Row1 = new MessageActionRow()
 .addComponent(select)   

await msg.channel.send('**Menü: Sunucu Rolleri**', { components: [Row1] });     
 }
}
})

client.on('clickMenu', async menu => {
const Member = menu.clicker.member 
 if (menu.values[0] == 'Lovers') {
  if (!Member.roles.cache.has(cfg.Roles.Lovers)) {
    await Member.roles.add(cfg.Roles.Lovers)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Lovers)) {
    await Member.roles.remove(cfg.Roles.Lovers)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
  }
} 

   if (menu.values[0] == 'Alone') {
  if (!Member.roles.cache.has(cfg.Roles.Alone)) {
    await Member.roles.add(cfg.Roles.Alone)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Alone)) {
    await Member.roles.remove(cfg.Roles.Alone)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
  }
} 

     if (menu.values[0] == 'LGBT') {
  if (!Member.roles.cache.has(cfg.Roles.Lgbt)) {
    await Member.roles.add(cfg.Roles.Lgbt)
    return menu.reply.send('Aşağıdaki roller başarıyla üstünüze eklendi:\n\n• '+menu.values[0]+'', true)
  } else if(Member.roles.cache.has(cfg.Roles.Lgbt)) {
    await Member.roles.remove(cfg.Roles.Lgbt)
    return menu.reply.send("Aşağıdaki roller başarıyla üstünüzden alındı:\n\n• "+menu.values[0]+"", true)
}}})

client.on('ready', async () => {

    client.user.setPresence({ activity: { name: cfg.Bot.Durum }, status: cfg.Bot.Status })
    let VoiceChannelID = client.channels.cache.get(cfg.Channels.VoiceChannelID)
    if (VoiceChannelID) VoiceChannelID.join().catch(() => { })
    console.log(`(${client.user.username}) adlı hesapta [${client.guilds.cache.get(cfg.Server.GuildID).name}] adlı sunucuda giriş yapıldı. ✔`)
    
    });
    
    client.login(cfg.Bot.Token).catch(() => console.error("Bota giriş yapılırken başarısız olundu!"));

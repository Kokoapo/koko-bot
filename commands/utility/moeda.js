const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("moeda")
        .setDescription("Faz um super cara ou coroa! Gira a moeda até termos 1d(dados[1d6]) caras ou coroas, quem tiver mais ganha! Sendo dados = [4, 6, 8, 10, 12, 20]"),
    async execute(interaction) {
        let dices = [4, 6, 8, 10, 12, 20];

        let dice = Math.floor(Math.random() * 6);
        let rolls = Math.floor(Math.random() * dices[dice]);
        
        let head = 0;
        let tails = 0;
        let winner = "";

        while (true) {
            let coin = Math.floor(Math.random() * 2);
            if (coin == 0) {
                head++;
            } else {
                tails++;
            }

            if (head == rolls) {
                winner = "Cara";
                break;
            } else if (tails == rolls) {
                winner = "Coroa";
                break;
            }
        }

        await interaction.reply(`${winner} Ganhou!`);
    }
};
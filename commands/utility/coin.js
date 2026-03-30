const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coin")
        .setDescription("Does a Super Coin Flip! Flips coins until we got 1d(1d6) heads or tails"),
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
                winner = "Head";
                break;
            } else if (tails == rolls) {
                winner = "Tails";
                break;
            }
        }

        await interaction.reply(`${winner} Won!`);
    }
};
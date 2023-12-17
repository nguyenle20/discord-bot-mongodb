const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "feedback",
  description: "Give a feedback to the teams",
  // deleted: true,

  options: [
    {
      name: "message",
      description: "Leave a message",
      required: true,
      type: ApplicationCommandOptionType.String,
    },
  ],

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    interaction.editReply(
      `Thanks for reaching out! We'll be passing this along to the team directly! Good luck playing the game!`
    );

      // console.log(await interaction);
    // console.log(interaction.options.data[0].value);
  },
};

const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  commentId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  username: {
    type: String,
  },
  channelId: {
    type: String,
  },
  status: {
    type: String,
    default: "new",
    enum: ["new", "resolved"],
  },
  statusEvent: {
    type: String,
  },
});

module.exports = model("Tickets", ticketSchema);

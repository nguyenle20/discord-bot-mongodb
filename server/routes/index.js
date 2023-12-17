const express = require("express");
const Tickets = require("../database/models/Ticket");
const router = express.Router();

//get list comment
router.get("/comments", async (req, res) => {
  try {
    const data = await Tickets.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add new comment
router.post("/comment", async (req, res) => {
  const data = new Tickets({
    commentId: req.body.commentId,
    channelId: req.body.channelId,
    comment: req.body.comment,
    userId: req.body.userId,
    username: req.body.username,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update status
router.patch("/comment/status/:commentId", async (req, res) => {
  if (!req.body.statusEvent || !req.body.userId) {
    return res.status(400).send("Required query params missing");
  }

  const query = {
    userId: req.body.userId,
    commentId: req.params.commentId,
  };

  const update = {
    statusEvent: req.body.statusEvent,
    status: "resolved",
  };

  try {
    const result = await Tickets.findOneAndUpdate(query, update, { new: true });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/");

module.exports = router;

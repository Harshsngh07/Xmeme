const mongoose = require("mongoose");
const PostMeme = require("../models/meme");
module.exports.getMemes = async (req, res) => {
  try {
    //fetches all the memes date wise i.e most recent created meme is at the top
    const memes = await PostMeme.find().sort({ createdAt: -1 });
    res.status(200).json(memes);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.postMemes = async (req, res) => {
  const meme = req.body;
  const newMeme = new PostMeme(meme);

  try {
    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.updateMeme = async (req, res) => {
  const { id } = req.params;
  const { name, caption, imageUrl } = req.body;
  // if id is not valid no meme with id response is send
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No meme with id: ${id}`);

  const updatedMeme = {
    name,
    caption,
    imageUrl,
    _id: id,
  };

  //if id is found then its updated
  await PostMeme.findByIdAndUpdate(id, updatedMeme, { new: true });

  res.json(updatedMeme);
};

module.exports.deleteMeme = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No meme with id: ${id}`);
  //if id is present then its removed from the db
  await PostMeme.findByIdAndRemove(id);

  res.json({ message: "Meme Deleted Successfully" });
};

module.exports.likeMeme = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No meme with id: ${id}`);

  const meme = await PostMeme.findById(id);
  const updatedMeme = await PostMeme.findByIdAndUpdate(
    id,
    { likeCount: meme.likeCount + 1 },
    { new: true }
  );

  res.json(updatedMeme);
};

const router = require("express").Router();
const {
  getMemes,
  postMemes,
  updateMeme,
  deleteMeme,
  likeMeme,
} = require("../controllers/api");

router.get("/memes", getMemes);
router.post("/memes", postMemes);
router.patch("/:id", updateMeme);
router.delete("/:id", deleteMeme);
router.patch("/:id/likeMeme", likeMeme);
module.exports = router;

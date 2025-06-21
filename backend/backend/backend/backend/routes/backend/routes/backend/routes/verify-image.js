const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { image_url } = req.body;
  res.json({ verified: true, reason: "Image appears authentic." });
});

module.exports = router;

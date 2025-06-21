const express = require('express');
const router = express.Router();
const disasters = [];

router.post('/', (req, res) => {
  const disaster = req.body;
  disasters.push(disaster);
  res.status(201).json({ message: 'Disaster created', disaster });
});

router.get('/', (req, res) => {
  const tag = req.query.tag;
  if (tag) {
    return res.json(disasters.filter(d => d.tags.includes(tag)));
  }
  res.json(disasters);
});

module.exports = router;

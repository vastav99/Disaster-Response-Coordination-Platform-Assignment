const express = require('express');
const router = express.Router();

router.get('/:id/resources', (req, res) => {
  res.json([{ name: "Red Cross Shelter", type: "shelter", location_name: "Lower East Side, NYC" }]);
});

module.exports = router;

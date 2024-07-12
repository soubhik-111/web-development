const express = require('express');
const { saveLocation, deleteLocation, getUserLocations } = require('../controllers/locationController');
const { auth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/location', auth, saveLocation);
router.delete('/location/:locationId', auth, deleteLocation);
router.get('/locations', auth, getUserLocations);

module.exports = router;

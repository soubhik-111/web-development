const User = require('../models/userModel');
const Location = require('../models/locationModel');

exports.saveLocation = async (req, res) => {
    const { name, weatherData } = req.body;
    const userId = req.user.id;

    try {
        const location = new Location({ name, weatherData });
        await location.save();

        const user = await User.findById(userId);
        user.savedLocations.push(location);
        await user.save();

        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteLocation = async (req, res) => {
    const { locationId } = req.params;
    const userId = req.user.id;

    try {
        await Location.findByIdAndDelete(locationId);

        const user = await User.findById(userId);
        user.savedLocations.pull(locationId);
        await user.save();

        res.status(200).json({ message: 'Location deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserLocations = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).populate('savedLocations');
        res.status(200).json(user.savedLocations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        }
    }
);

const Country = mongoose.model('Countries', countrySchema);
module.exports = Country;
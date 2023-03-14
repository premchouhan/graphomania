const schema_mongoose = require('mongoose');

const blogDetails = schema_mongoose.Schema(
    {
        name: { type: String },
        title: { type: String },
        email: { type: String },
        blog: { type: String },
        name: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = schema_mongoose.model('blogs', blogDetails);
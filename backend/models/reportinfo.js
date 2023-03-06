const schema_mongoose = require('mongoose');

const feedbackDetails = schema_mongoose.Schema(
    {
        username: { type: String },
        useremail: { type: String },
        usermessage: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = schema_mongoose.model('feedbackcollection', feedbackDetails);
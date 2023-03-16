const schema_mongoose = require('mongoose');

const blogmodel = schema_mongoose.Schema(
    {
        category: { type: String },
        title: { type: String },
        name: { type: String },
        blog: { type: String },
        email: { type: String },
       
    },
    {
        timestamps: true
    }
);

module.exports = schema_mongoose.model('blog', blogmodel);
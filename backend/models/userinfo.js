const schema_mongoose = require('mongoose');

const UserDetails = schema_mongoose.Schema(
   {
      name: { type: String },
      email: { type: String },
      mobile: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('usercollection', UserDetails);
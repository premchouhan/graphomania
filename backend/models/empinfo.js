const schema_mongoose = require('mongoose');

const EmpDetails = schema_mongoose.Schema(
   {
      empname: { type: String },
      empemail: { type: String },
      empmobile: { type: String },
      empdob: { type: String },
      emppass: { type: String },
      empgender: { type: String },
      empcountry: { type: String },
      empaddress: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('empcollection', EmpDetails);
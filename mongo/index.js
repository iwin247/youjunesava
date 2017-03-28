const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/edcan');

var ApplysSchema = mongoose.Schema({
  name: {type: String},
  Student_Num: {type: String},
  Phone_Num: {type: String},
  email: {type: String},
  gender: {type: String},
  Department: {type: String},
  introduce: {type: String},
  why_edcan: {type: String},
  what_can_u_do: {type: String},
  portfolio: {type: String}
});

var apply = mongoose.model("applys", ApplysSchema);

exports.Apply = apply;

exports.db = db;

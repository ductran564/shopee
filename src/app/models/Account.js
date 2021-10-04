const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
  phone: {type: String},
  password: {type: String},
  enterpassword: {type: String},
});

module.exports = mongoose.model('Account', Account);

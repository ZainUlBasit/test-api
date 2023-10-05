const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reqStr = {
  type: String,
  required: true,
};

const UsersSchema = new Schema({
  email: reqStr,
  password: reqStr,
});

module.exports = mongoose.model("Users", UsersSchema);

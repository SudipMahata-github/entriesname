const mongoose = require("mongoose");
const crudSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Allnames = mongoose.model("allnames", crudSchema);
module.exports = Allnames;

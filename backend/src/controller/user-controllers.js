const User = require("../models/file");
module.exports = {
  getUser: async (req, res) => {
    try {
      const data = await User.find();
      res.send(data).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addUser: async (req, res) => {
    try {
      const data = new User(req.body);
      await data.save();
      res.send(data).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const _id = req.params.id;
      await User.findByIdAndDelete(_id);
      res.send("item deleted");
    } catch (error) {
      console.log(error);
    }
  },
};

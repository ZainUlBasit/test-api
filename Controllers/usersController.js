const Users = require("../Models/Users");

const AddUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  let user;
  try {
    user = new Users({
      email: email,
      password: password,
    });
    await user.save();
  } catch (err) {
    console.log("Error: ", err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable to Add Customer" });
  }
  return res.status(201).json({ user });
};

exports.AddUser = AddUser;

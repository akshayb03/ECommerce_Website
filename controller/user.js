const User = require("../models/Users");
const jwt = require("jsonwebtoken");

const loginController = async (req, res, next) => {
  try {
    const users = await User.find();
    const filteredUser = users.filter((user) => user.email === req.body.email);
    if (filteredUser.length === 0) {
      throw Error("User not found");
    }
    if (filteredUser[0].password === req.body.password) {
      const token = jwt.sign(
        { email: filteredUser[0].email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.send({ ...filteredUser, token: token });
    } else {
      throw Error("Incorrect password");
    }
  } catch (error) {
    res.status(404);
    res.send({ error: error.message });
  }
};

const addUserController = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const addedUser = await user.save();
    res.status(200);
    res.send(addedUser);
  } catch (error) {
    res.status(404);
    res.send({ error: error.message });
  }
};

module.exports = { loginController, addUserController };

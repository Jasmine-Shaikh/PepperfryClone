const { User } = require("../database/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async (req, res) => {
  try {
    const newUser = req.body;

    if (
      newUser.email === "" ||
      newUser.password === "" ||
      newUser.mobile === "" ||
      newUser.name === ""
    ) {
      return res.status(400).send({
        message: "Please fill all the below mentioned feilds",
      });
    }

    let existingUser = await User.findOne({
      email: newUser.email,
    });

    if (existingUser) {
      return res.status(400).send({
        message: "Account already exists! Please Log In.",
      });
    }

    if (newUser.password.length < 6) {
      return res.status(400).send({
        message: "Password should contain atleast 6 characters.",
      });
    }

    let user = await User(newUser);
    await user.save();
    user = user.toJSON();
    delete user.password;
    console.log(newUser);
    res.status(201).send("Registeration Complete!");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate("password");
    if (!user) {
      return res.status(400).send({
        message: "User not found!",
      });
    } else {
      if (user.password === password) {
        const token = jwt.sign(
          { id: user._id, email: user.email, name: user.name },
          process.env.SECRET_KEY
        );
        return res.status(200).send({ token });
      } else {
        return res.status(400).send({
          message: "Incorrect Password!",
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const verifytoken = async (req, res) => {
  try {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded) {
      return res.status(200).send({ decoded, token });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { register, login, verifytoken };

const User = require("../Model/userSchma");

const postdata = async (req, res) => {
  const { name, email, age } = req.body;

  if (!name) {
    return res.status(404).json("plz fill the name");
  } else if (!email) {
    return res.status(404).json("plz fill the e");
  } else if (!age) {
    return res.status(404).json("plz fill the a");
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      res.status(422).json("this is user is already present");
    } else {
      const adduser = new User({
        name,
        email,
        age,
      });

      await adduser.save();
      res.status(201).json(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
};

const getAlldata = async (req, res) => {
  try {
    const userdata = await User.find();
    res.status(201).json(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(userUpdate, "userupdate");
    res.status(201).json(userUpdate);
  } catch (error) {
    res.status(422).json(error);
  }
};

module.exports = {
  postdata,
  getAlldata,
  updateData,
};

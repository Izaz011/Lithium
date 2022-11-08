const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
  const data = req.body
  try {
    if (Object.keys(data).length != 0) {
      const userData = await userModel.create(data)
      res.status(201).send({ msg: userData })
    }

    else {
      res.status(400).send({ status: false, msg: "data is required" })
    }
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
}






const loginUser = async function (req, res) {
  try {
    const userName = req.body.emailId
    const password = req.body.password

    if (!userName) {
      return res.status(400).send({ staus: false, msg: "userName field is empty" })
    }
    if (!password) {
      return res.status(400).send({ satus: false, msg: "password field  is empty" })
    }
    const userData = await userModel.findOne({ emailId: userName, password: password })

    if (!userData) {
      return res.status(401).send({ status: false, msg: "user id or password is invalid" })
    }
    const token = jwt.sign(
      {
        userId: userData._id.toString(),
        batch: "lithium",
        organisation: "FunctionUp",
      }, "functionup-lithium-secret-key"
    )
    res.setHeader("x-auth-token", token)
    res.status(200).send({ status: true, token: token })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
}






const getUserData = async function (req, res) {
  try {
    const userId = req.params.userId
    const userDetails = await userModel.findById(userId)
    res.status(200).send({ status: true, msg: userDetails })
  }
  catch (error) {
    res.status(500).send({ error: error })
  }

}





const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let userData = req.body
    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData)
    res.status(200).send({ data: updatedUser })
  }
  catch (error) {
    res.status(500).send({ error: error })
  }
}




const deleteUser = async function (req, res) {
  try {
    const userId = req.params.userId
    const deletedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: true } }
    )
    res.status(200).send({ status: true, msg: deletedUser })
  }
  catch (error) {
    res.status(500).send({ error: error })
  }
}








module.exports = {
  createUser, loginUser, getUserData, updateUser, deleteUser
}
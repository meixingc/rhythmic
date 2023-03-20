const { Users } = require('../models')

const GetAllUsers = async(req,res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers
}

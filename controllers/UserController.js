const UserService = require('../services/userServices');
exports.addUser = async (req, res) => {
  try {
    const newEmp = await UserService.createUser(req.body);
    res.status(201).json(newEmp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  
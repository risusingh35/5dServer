const MomentService = require('../services/momentService');
exports.addMoment = async (req, res) => {

  try {
    const newMoment = await MomentService.addMoment(req, res);

    res.status(201).json(newMoment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.listMoments = async (req,res) => {

  try {
    let moment = await MomentService.listMoments(req.query.userID);
    res.json(moment);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

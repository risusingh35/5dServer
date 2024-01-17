const mongoose = require('mongoose');
const momentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users5Ds',
  },
});
const Moment = mongoose.model('moment5D', momentSchema)
module.exports = Moment;

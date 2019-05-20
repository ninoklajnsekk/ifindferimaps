const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  mapwidth: {
    type: 'Number'
  },
  mapheight: {
    type: 'Number'
  },
  groups: {
    type: [
      'Mixed'
    ]
  },
  levels: {
    type: [
      'Mixed'
    ]
  }
});

module.exports = mongoose.model('Map', mapSchema);
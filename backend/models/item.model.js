const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: { type: String, required: true } ,
  qty: { type: String, required: true } ,
}, {
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
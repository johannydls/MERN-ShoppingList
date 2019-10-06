const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
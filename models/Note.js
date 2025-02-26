const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 100
  },
  content: { 
    type: String,
    trim: true,
    maxlength: 1000
  },
  category: { 
    type: String,
    trim: true,
    maxlength: 50
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema)
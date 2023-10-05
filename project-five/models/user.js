const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },

})
const Todo = mongoose.model("User", todoSchema);

module.exports = Todo;
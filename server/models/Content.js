// This is content.js file
const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  job_id: String,
  name: String,
  subject: String,
  body: String,
  sent_to: { type: Array },
});

module.exports = mongoose.model("content", ContentSchema);

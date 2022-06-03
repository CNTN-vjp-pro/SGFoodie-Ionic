const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PolicySchema = new Schema({
    title: { type: String, required: true },
    precontent: { type: String },
    body: [
        { subtitle: String, content: String }
    ]
})
module.exports = mongoose.model("Policy", PolicySchema)
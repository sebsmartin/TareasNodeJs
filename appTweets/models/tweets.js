
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const tweetsSchema = new mongoose.Schema(
    {
        userId:{
            type: ObjectId,
            ref: "User",
            required: true
        },
        message:{
            type: String,
            default: ''
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweets", TweetsSchema);
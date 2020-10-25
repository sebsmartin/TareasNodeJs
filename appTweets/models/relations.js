
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const relationsSchema = new mongoose.Schema(
    {
        userId:{
            type: ObjectId,
            ref: "User",
            required: true
        },
        userRelationId:{
            type: ObjectId,
            ref: "Relations",
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Relations", relationsSchema);
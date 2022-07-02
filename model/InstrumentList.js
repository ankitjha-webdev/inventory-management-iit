const { default: mongoose } = require("mongoose");

const InstrumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
} , { timestamps: true });

module.exports = mongoose.model("Instrument", InstrumentSchema);
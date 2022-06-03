const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookingSchema = new Schema({
    adultQuantity: { type: Number, required: true },
    childrenQuantity: {
        type: Number,
        required: true
    },
    bookingDate: { type: Date, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    note: { type: String },
    restaurantName: { type: String },
    restaurantAddress: { type: String }
}, { versionKey: false })
module.exports = mongoose.model("Booking", BookingSchema)
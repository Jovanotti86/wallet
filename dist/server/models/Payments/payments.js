"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./../../../db/mongoose");
const Schema = mongoose_1.mongoose.Schema;
const PaymentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        minlength: 1
    },
    date: {
        type: String,
        required: true,
    },
    _user: {
        type: mongoose_1.mongoose.Types.ObjectId,
        required: true
    }
});
const Payment = mongoose_1.mongoose.model('Payment', PaymentSchema);
exports.Payment = Payment;

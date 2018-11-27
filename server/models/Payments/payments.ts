import { mongoose } from "./../../../db/mongoose";



export interface IPayments {
    amount: number,
    date?: Date,
    _user?: mongoose.Types.ObjectId,
    income: boolean,
    guid: string
}

interface IPaymentsModel extends IPayments, mongoose.Document {}

const Schema = mongoose.Schema;


const PaymentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        minlength: 1
    },
    date: {
        type: Date,
        required: true,
    },
    _user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    income: {
        type: Boolean,
        required: true
    },
    guid: {
        type: String,
        required: true
    }
});


const Payment = mongoose.model<IPaymentsModel>('Payment', PaymentSchema);

export {Payment}
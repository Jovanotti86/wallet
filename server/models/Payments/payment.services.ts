import { IPayments, Payment } from "./payments";
import { mongoose } from "../../../db/mongoose";

export class PaymentServices {

    /**
     * Find all payments by user
     * @param _user
     */
    public static async findByUser(_user: mongoose.Types.ObjectId) {
        return await Payment.find({
            _user
        });
    }
    
    /**
     * Create new payment
     * @param payment 
     */
    public static async createPayment(payment: IPayments) {
        var newPayment = new Payment({
            amount: payment.amount,
            _user: payment._user,
            date: payment.date,
            income: payment.income,
            guid: payment.guid
        });
        return await newPayment.save();
    }

    /**
     * Delete specific payment
     * @param _id 
     * @param _user 
     */
    public static async deletePayment(guid: string, _user:mongoose.Types.ObjectId) {
       const result: any =  await Payment.findOneAndDelete({
           guid,
           _user
        });

        return result;
    }

    /**
     * Update specific payment
     * @param payment 
     */
    public static async updatePayment(payment: IPayments): Promise<IPayments> {
        return await Payment.findOneAndUpdate({
            guid: payment.guid,
        },{
            amount: payment.amount,
            income: payment.income
        })
    }
}
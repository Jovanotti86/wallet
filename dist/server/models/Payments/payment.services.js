"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const payments_1 = require("./payments");
class PaymentServices {
    /**
     * Find all payments by user
     * @param _user
     */
    static findByUser(_user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payments_1.Payment.find({
                _user
            });
        });
    }
    /**
     * Create new payment
     * @param payment
     */
    static createPayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            var newPayment = new payments_1.Payment({
                amount: payment.amount,
                _user: payment._user,
                date: payment.date
            });
            return yield newPayment.save();
        });
    }
}
exports.PaymentServices = PaymentServices;

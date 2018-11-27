"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _ = __importStar(require("lodash"));
const payment_services_1 = require("../models/Payments/payment.services");
const middleware_1 = require("../middleware");
class paymentRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.get('/payment', middleware_1.checkAuth, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const payments = yield payment_services_1.PaymentServices.findByUser(req.user._id);
            res.send(payments);
        }));
        this.router.post('/payment', middleware_1.checkAuth, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = _.pick(req.body, ['amount']);
            const newPayment = {
                amount: body.amount,
                _user: req.user._id,
                date: new Date().toDateString(),
            };
            console.log(newPayment);
            const payment = yield payment_services_1.PaymentServices.createPayment(newPayment);
            res.send('tralalal');
        }));
        return this.router;
    }
}
exports.paymentRoutes = paymentRoutes;

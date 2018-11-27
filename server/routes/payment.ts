import { Router, Request, Response } from "express";
import * as _ from 'lodash';
import { IPayments } from "../models/Payments/payments";
import { IRequest } from "../models/interfaces";
import { PaymentServices } from "../models/Payments/payment.services";
import { checkAuth } from "../middleware";
import * as uuid from "uuid";


export class paymentRoutes {
    private router: Router = Router();

    public getRouter(): Router {

        this.router.get('/payment',checkAuth, async (req: IRequest, res: Response) => {
            const payments: IPayments[] = await PaymentServices.findByUser(req.user._id);
            res.send(payments);
        });

        this.router.post('/payment', checkAuth, async(req: IRequest, res: Response) => {
            const body = _.pick(req.body, ['amount','income']);
            const newPayment: IPayments = {
                amount: body.amount,
                _user: req.user._id,
                date: new Date(),
                income: body.income,
                guid: uuid.v4()
            }
            const payment = await PaymentServices.createPayment(newPayment);
            res.send({
                payment
            });
        });

        this.router.delete('/payment/:guid', checkAuth, async(req: IRequest, res: Response) => {
            await PaymentServices.deletePayment(req.params.guid, req.user._id);

            res.status(200).send();
        })

        this.router.put('/payment/:guid', async(req: IRequest, res: Response) => {
            const body = _.pick(req.body,['amount', 'income']);
            const result: IPayments = await PaymentServices.updatePayment({
                amount: body.amount,
                income: body.income,
                guid: req.params.guid
            });

            res.send(result);
        })

       

        return this.router;
    }
}
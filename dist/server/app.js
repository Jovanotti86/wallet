"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
config_1.initializeEnviroments();
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("./../db/mongoose");
const routes_1 = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express_1.default();
mongoose_1.createMongoConenction();
app.use(bodyParser.json());
app.listen(process.env.PORT, function () {
    console.log(`Server started on ${process.env.PORT}`);
});
routes_1.apiRoutes(app);

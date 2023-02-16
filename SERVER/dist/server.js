"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const developmentVariables_1 = require("./config/developmentVariables");
const dbConnection_1 = require("./config/dbConnection");
const app = (0, express_1.default)();
(0, dbConnection_1.connectDB)();
const corsOptions = {
    origin: `http://localhost:${developmentVariables_1.devConfig.PORT}`
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/events", eventRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Starting page");
});
app.listen(developmentVariables_1.devConfig.PORT, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${developmentVariables_1.devConfig.PORT}`);
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventsController_1 = require("../controllers/eventsController");
const router = (0, express_1.Router)();
router.post("/add", eventsController_1.addEvent);
router.get("/view", eventsController_1.viewEvents);
exports.default = router;

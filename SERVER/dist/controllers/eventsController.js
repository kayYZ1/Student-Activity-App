"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewEvents = exports.addEvent = void 0;
const eventModel_1 = __importDefault(require("../models/eventModel"));
const addEvent = (req, res, next) => {
    const event = new eventModel_1.default({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        image: req.body.image,
        hour: req.body.hour,
        date: req.body.date
    });
    event.save((err, event) => {
        if (err) {
            res.status(500).send({ message: "Could not save data into the database" });
        }
        else {
            res.status(201).send({ message: `Event of id:${event._id} added to the database` });
        }
    });
};
exports.addEvent = addEvent;
const viewEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield eventModel_1.default.find().sort({ date: -1 });
        res.status(200).send(events);
    }
    catch (error) {
        res.status(500).send({ message: "Internal Error, could not fulfill the request" });
    }
});
exports.viewEvents = viewEvents;

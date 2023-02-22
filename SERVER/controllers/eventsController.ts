import { RequestHandler } from 'express'

import Event from '../models/eventModel'

export const addEvent: RequestHandler = (req, res, next) => {
    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
        image: req.body.image,
        hour: req.body.hour,
        date: req.body.date
    })

    event.save((err, event) => {
        if (err) {
            res.status(500).send({ message: "Could not save data into the database" })
        } else {
            res.status(201).send({ message: `Event of id:${event._id} added to the database` })
        }
    })
}

export const viewEvents: RequestHandler = async (req, res, next) => {
    try {
        const events = await Event.find().sort({ date: -1 })
        res.status(200).send(events)
    } catch (error) {
        res.status(500).send({ message: "Internal Error, could not fulfill the request" })
    }
}


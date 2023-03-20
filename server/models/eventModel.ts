import mongoose from "mongoose"

import { IEvents } from "../utils/models.interfaces"

const eventSchema = new mongoose.Schema<IEvents> ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Event = mongoose.model<IEvents>("Events", eventSchema)

export default Event
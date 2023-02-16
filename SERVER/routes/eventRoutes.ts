import { Router } from "express"

import { addEvent, viewEvents } from "../controllers/eventsController"

const router = Router()

router.post("/add", addEvent)

router.get("/view", viewEvents)

export default router
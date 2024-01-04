import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { events } from "../controllers/events.controller.js"


const eventRouter = Router();

eventRouter.route("/event").post(
        upload.fields([
                { name: "imageUrl", maxCount: 1 }
        ]),
        events
)
export { eventRouter }
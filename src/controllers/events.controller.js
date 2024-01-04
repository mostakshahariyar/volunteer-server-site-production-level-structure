import { Event } from "../models/events.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandeler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const events = asyncHandler(async (req, res) => {
        const { name, description, color } = req.body;
        if (
                [name, description, color].some((filed) => filed?.trim() === "")
        ) {
                throw new ApiError(400, "All fields are required")
        }
        const imageLocalPath = req.body?.imageUrl;
        console.log(imageLocalPath, "Image local path");
        console.log(req.files, "Files");
        // if (!imageLocalPath) {
        //         throw new ApiError(400, "Event Image is missing")
        // }
        // const image = await uploadOnCloudinary(imageLocalPath);
        // if (!image) {
        //         throw new ApiError(400, "Missing event image")
        // }
        // const event = await Event.create({
        //         name,
        //         imageUrl: image.url,
        //         description,
        //         color
        // })
        // const createdEvent = await Event.findById(event._id);
        // console.log(createdEvent)
        // if (createdEvent) {
        //         return res.status(201, event, "Event created successfully")
        // }

})
export { events }
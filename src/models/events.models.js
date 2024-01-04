import mongoose, { Schema } from "mongoose";

const eventsSchema = new Schema(
        {
                name: {
                        type: String,
                        require: true
                },
                description: {
                        type: String,
                        require: true
                },
                imageUrl: {
                        type: String, // cloudinary url
                        require: true
                },
                color: {
                        type: String,
                        required: true
                }
        }
        , { timestamps: true });


export const Event = mongoose.model("Event", eventsSchema);
import mongoose, {Schema} from "mongoose";

const reviewSchema = new Schema(
    {
        movieid: {
            type: String,
            required : true,
            unique: true,
            trim: true, 
            index: true
        },
        user: {
            type: String,
            required : true,
            unique: true,
            trim: true,
        },
        review: {
            type: String,
            required : true,
            trim: true,
            index: true
        },
    },
    {
        timestamps: true
    }
)
export const User = mongoose.model("Review", reviewSchema);
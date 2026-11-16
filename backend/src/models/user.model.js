import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model("User", userSchema);


import { model, Schema } from "mongoose";
import { app_config } from "../constants/app.constant";
import passport from "passport";

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    passport: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.values(app_config.roles),
      default: app_config.roles.VISITOR,
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/zld78yto/image/upload/v1783615661/134996379_da7ed7b0-5f66-4f97-a610-51100d3b9fd2_srspvw.jpg",
    },
  },
  {
    timestamps: true,
  },
);

export default userModel = model('user',userSchema);

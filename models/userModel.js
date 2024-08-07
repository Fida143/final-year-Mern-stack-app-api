import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    address: { type: String, required: true },
    answer: { type: String, requied: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("users", UserSchema);

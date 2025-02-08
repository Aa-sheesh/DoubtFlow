import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    timetable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Timetable",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (password) {
    if(!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (error) {
        next(error);
    }
})

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

const User = mongoose.model("User",userSchema);

export default User;

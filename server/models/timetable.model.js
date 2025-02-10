import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    branch: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    day:{
      type: String,
      required: true,
    },
    timeslots:{
      type: [String],
      required: true,
    },
    timetable: {
      type: [String],
      required: true,
    },
  },
);

const Timetable = mongoose.model("Timetable", timetableSchema);
export default Timetable;

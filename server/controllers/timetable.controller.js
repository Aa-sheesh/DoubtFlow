import Timetable from "../models/timetable.model.js";

export const getTimetable = async (req, res) => {
  try {
    // if (!req.user) {
    //   return res.status(401).json({
    //     message: "Unauthorized",
    //   });
    // }
    const { branch, section } = req.query;
    const query = await Timetable.findOne({ branch, section });
    const timeslots=query.timeslots;
    const timetable=query.timetable;
    res.status(200).json({
      timeslots,
      timetable,
    });
    
  } catch (error) {
    console.log("Error in getTimetable", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

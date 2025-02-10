import Timetable from "../models/timetable.model.js";

export const getTimetable = async (req, res) => {
  try {
    // if (!req.user) {
    //   return res.status(401).json({
    //     message: "Unauthorized",
    //   });
    // }
    const { branch, section } = req.query;
    // console.log(branch, section);
    const query = await Timetable.findOne({ branch, section });
    // console.log(query);
    
    const timeslots = query.timeslots;
    const timetable = query.timetable;
    // console.log(timeslots);
    res.status(200).json({
      timeslots,
      timetable,
    });
    // console.log("Timetable fetched successfully");
    
  } catch (error) {
    console.log("Error in getTimetable", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

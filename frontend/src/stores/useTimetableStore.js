import { create } from "zustand";
import axios from "../lib/axios.js";
import toast from "react-hot-toast";

export const useTimetableStore = create((set) => ({
    timeslots: [], // ✅ Initialize as empty arrays
    timetable: [],

    getTimetable: async (branch, section) => {
        try {
            const res = await axios.get("/api/timetable", { params: { branch, section } });
            
            set(() => ({
                timeslots: res.data.timeslots || [], // ✅ Ensures always an array
                timetable: res.data.timetable || []
            }));
        } catch (error) {
            console.error("Error fetching timetable:", error.response?.data || error.message);
            toast.error("Error in getting timetable");
        }
    }
}));

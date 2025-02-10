import {create} from "zustand";
import axios from "../lib/axios.js";
import toast from "react-hot-toast";
import { useUserStore } from "./useUserStore.js";


export const useTimetableStore=create((set,get)=>({
    timeslots:[],
    timetable:[],

    getTimetable: async(branch,section)=>{
        try {
            const res = await axios.get("/api/timetable", { params: { branch, section } });
            set({timeslots:[...res.data.timeslots],timetable:[...res.data.timetable]});

        } catch (error) {
            toast.error("Error in getting timetable");

        }
    }

}));
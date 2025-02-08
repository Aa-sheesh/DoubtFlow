import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useUserStore=create((set,get)=>({
    user:null,

    login: async(email,password)=>{
        try {
            const res=await axios.post("/api/auth/login",{email,password});
            set({user:res.data});
        } catch (error) {
            set({user:null});
            toast.error("Invalid Credentials");

        }
    },

    logout: async()=>{
        try {
            await axios.post("/auth/logout");
            set({user:null});
        } catch (error) {
            toast.error("Error Logging out");

        }
    }
}))

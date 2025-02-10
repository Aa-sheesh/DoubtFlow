import { create } from "zustand";
import axios from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useUserStore=create((set,get)=>({
    user:null,

    login: async(email,password)=>{
        try {
            const res=await axios.post("/api/auth/login",{email,password});
            set({user:res.data});
            toast.success("Logged in successfully");
        } catch (error) {
            set({user:null});
            
        }
        
    },

    logout: async()=>{
        try {
            set({user:null});
        } catch (error) {
            toast.error("Error Logging out");

        }
    }
}))

import { create } from "zustand";

export const useAuthStore = create((set)=>({
  authUser : {name : "Aryan" , _id : 123 ,  age : 21},
  isloading : false,

  login : () => {
    console.log("Loged In ");
  }
}))
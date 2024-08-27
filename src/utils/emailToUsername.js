import { generateOtp } from "./otpGenerator.js"
export const emailToUsername=(email)=>{
    return email.slice(0,email.indexOf("@"))+generateOtp();
}
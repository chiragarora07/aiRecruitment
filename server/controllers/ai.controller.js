import { testAI } from "../services/gemini.service.js";
export const checkAI = async (req,res)=>{
    const message = await testAI();
    res.status(200).json({
        success: true,
        message
    });
};
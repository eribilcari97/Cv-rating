

import { analyzeWithAI } from "../services/aiServices.js";



export const showAllFeautures= async (req,res)=>{
    res.status(201).json({message:"Welcome to Cv-rating"});
}


export const analyzeCV = async (req, res) => {
  try {
    const { cvText } = req.body;

    const aiResponse = await analyzeWithAI(cvText);

    const parsed = JSON.parse(aiResponse);

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
};


import { analyzeWithAI } from "../services/aiServices.js";



export const showAllFeautures= async (req,res)=>{
    res.status(201).json({message:"Welcome to Cv-rating"});
}



export const analyzeCV = async (req, res) => {
  try {
    const { cvText } = req.body;

    const aiResponse = await analyzeWithAI(cvText);

  
    let text = aiResponse;

    // extraxting only Json
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const match = text.match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("No valid JSON found in AI response");
    }

    const parsed = JSON.parse(match[0]);

    res.json(parsed);
  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI failed" });
  }
};
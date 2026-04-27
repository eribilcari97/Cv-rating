import fetch from "node-fetch";

export const analyzeWithAI = async (cvText) => {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a strict CV reviewer."
        },
        {
          role: "user",
          content: `
Analyze this CV and Return ONLY valid JSON. Do not include explanations or text outside JSON.:

{
  "score": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Rules:
- Score from 0 to 100
- Be critical, not nice
- Focus on impact, clarity, and measurable results

CV:
${cvText}
          `
        }
      ]
    })
  });

  const data = await response.json();

  return data.choices[0].message.content;
};
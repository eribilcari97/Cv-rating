export const analyzeWithAI = async (cvText) => {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
Analyze this CV and return ONLY JSON:

{
  "score": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Be strict. No extra text.

CV:
${cvText}
                `
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  console.log("GEMINI RESPONSE:", data);

  const text =
    data.candidates?.[0]?.content?.parts?.[0]?.text;

  return text;
};
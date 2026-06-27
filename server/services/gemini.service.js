import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeResume(resumeText) {
  const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume and return ONLY valid JSON.

Resume:
${resumeText}

Return this exact format:

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": [],
  "interviewQuestions": []
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown if Gemini returns it
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(text);

  } catch (error) {

    console.log("Gemini unavailable. Using mock AI analysis.");

    return {
      atsScore: 86,
      strengths: [
        "Good JavaScript knowledge",
        "Strong backend projects",
        "Clean resume structure"
      ],
      weaknesses: [
        "Limited cloud experience",
        "No certifications listed"
      ],
      missingSkills: [
        "Docker",
        "AWS",
        "Kubernetes"
      ],
      suggestions: [
        "Add measurable project achievements.",
        "Include GitHub profile.",
        "Highlight technical skills at the top."
      ],
      interviewQuestions: [
        "Explain Node.js event loop.",
        "Difference between SQL and NoSQL?",
        "How does JWT authentication work?",
        "Explain REST APIs.",
        "Describe one challenging project."
      ]
    };

  }
}

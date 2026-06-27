import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ✅ TEST FUNCTION (fixed)
export const testAI = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say Hello to HireFlow Backend",
  });

  return response.text(); // ✅ fixed
};

// ✅ MAIN AI FUNCTION
export const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS (Applicant Tracking System) and technical recruiter.

Analyze the following resume text and return a STRICT JSON response.

Resume:
"""
${resumeText}
"""

Return ONLY valid JSON in this exact format:

{
  "atsScore": number (0-100),
  "summary": "short professional summary",
  "skills": ["skill1", "skill2"],
  "experience": [
    {
      "role": "",
      "company": "",
      "duration": "",
      "description": ""
    }
  ],
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": ""
    }
  ],
  "strengths": ["point1", "point2"],
  "weaknesses": ["point1", "point2"],
  "suggestions": ["improvement1", "improvement2"]
}

Rules:
- DO NOT return anything except JSON
- DO NOT include explanations
- DO NOT include markdown
- Ensure valid JSON format
- ATS score must be realistic
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const rawText = response.text().trim();

    // 🔍 Extract JSON safely
    const jsonStart = rawText.indexOf("{");
    const jsonEnd = rawText.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Invalid AI response format");
    }

    const jsonString = rawText.substring(jsonStart, jsonEnd + 1);

    let parsed;

    try {
      parsed = JSON.parse(jsonString);
    } catch {
      throw new Error("AI returned invalid JSON");
    }

    // ✅ Safety fixes
    parsed.atsScore = Math.max(0, Math.min(100, parsed.atsScore || 0));
    parsed.summary = parsed.summary || "";
    parsed.skills = parsed.skills || [];
    parsed.experience = parsed.experience || [];
    parsed.education = parsed.education || [];
    parsed.strengths = parsed.strengths || [];
    parsed.weaknesses = parsed.weaknesses || [];
    parsed.suggestions = parsed.suggestions || [];

    return parsed;

  } catch (error) {
    console.error("AI ERROR:", error.message);

    throw new Error("Failed to analyze resume");
  }
};
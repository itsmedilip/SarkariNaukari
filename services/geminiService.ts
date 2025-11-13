
import { GoogleGenAI, Type } from "@google/genai";
import { SeoData } from "../types";

// FIX: The API key is obtained directly from environment variables as per guidelines.
// The check for a missing key has been removed, assuming it's always available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSeoContent = async (
  jobTitle: string,
  jobDescription: string
): Promise<SeoData> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate SEO content for a job listing.
        Job Title: "${jobTitle}"
        Job Description: "${jobDescription.substring(0, 500)}..."
        
        Provide the output in a JSON object with three keys: "title" (an SEO-friendly title, max 60 chars), "metaDescription" (a compelling meta description, max 160 chars), and "tags" (an array of 5-7 relevant keywords).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "SEO-friendly title for the job listing, max 60 characters."
            },
            metaDescription: {
              type: Type.STRING,
              description: "Compelling meta description for the job listing, max 160 characters."
            },
            tags: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING
              },
              description: "An array of 5 to 7 relevant keywords as tags."
            }
          },
          required: ["title", "metaDescription", "tags"]
        }
      }
    });
    
    const jsonString = response.text;
    const parsedJson = JSON.parse(jsonString);

    if (parsedJson && typeof parsedJson.title === 'string' && typeof parsedJson.metaDescription === 'string' && Array.isArray(parsedJson.tags)) {
        return parsedJson as SeoData;
    } else {
        throw new Error("Invalid JSON structure received from API");
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate SEO content from Gemini API.");
  }
};

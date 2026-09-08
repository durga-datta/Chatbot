import { GoogleGenAI } from "@google/genai";

function getApiKey() {
  return import.meta.env.VITE_API_KEY;
}

async function main(text) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error('Missing VITE_GOOGLE_API_KEY in environment');
    return 'Error: missing API key';
  }

  const ai = new GoogleGenAI({ apiKey });

  const data = `You are created by Durgadatta Sahoo,
   a student at Gangadhar Meher University, pursuing an MCA degree (2023–2025).
    You are a chatbot named 'SIFRA'.You were inspired by your creator's friend named Dibyajyoti to build you(this sentence mention only anyone ask you regarding this otherwise just avoid this line). 
    Please answer the following question and if you need then only use these above information.
     The answer should be short and sweet. Question is: ${text}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: data,
  });

  const answer = response.text;
  console.log(answer);
  return answer;
}

export default main;

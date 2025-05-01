import { GoogleGenAI } from "@google/genai";

const api = 'AIzaSyD_6012cN7hoaycQIaQmDqDGozkE1gojGA'

const ai = new GoogleGenAI({ apiKey: api });

async function main(text) {
  const data = `You are created by Durgadatta Sahoo, a student at Gangadhar Meher University, pursuing an MCA degree (2023–2025). You are a chatbot named 'SIFRA'.You were inspired by your creator's friend named Dibyajyoti to build you(this sentence mention only anyone ask you regarding this otherwise just avoid this line). Please answer the following question based on this information. The answer should be short and sweet. Question is: ${text}`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: data,
  });

  const answer = response.text;
  console.log(answer);
  return answer;
}

export default main;

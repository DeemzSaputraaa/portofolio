import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.readFileSync(".env", "utf8");
const key = env.split("=")[1].trim();

const genAI = new GoogleGenerativeAI(key);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const chat = model.startChat({
      history: []
    });
    const result = await chat.sendMessage("hello");
    console.log("SUCCESS:", await result.response.text());
  } catch (e) {
    console.error("FAILED:", e.message);
  }
}

run();

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const env = fs.readFileSync(".env", "utf8");
const key = env.split("=")[1].trim();
console.log("Key:", key.substring(0, 10) + "...");

const genAI = new GoogleGenerativeAI(key);

async function run() {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.models.map(m => m.name).join("\n"));
  } catch (e) {
    console.error(e);
  }
}

run();

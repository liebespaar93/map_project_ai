"use server"
import { NextResponse, NextRequest } from 'next/server'
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory, InputContent } from "@google/generative-ai"

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  return NextResponse.json({
    test: "next_api"
  })
}

export async function POST(req: NextRequest) {
  const header: Headers = new Headers(req.headers)
  const params: geminiPostReqType = await req.json()

  const key: string | undefined = process.env.NEXT_BARD_APIKEY
  const genAI = new GoogleGenerativeAI(key ? key : "");
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings: [
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      { category: HarmCategory.HARM_CATEGORY_UNSPECIFIED, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
    ],
    generationConfig: { maxOutputTokens: 256 }
  });

  const chat = model.startChat({
    history: params.chat_history
  });

  const msg = params.chat_input;

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const history = await chat.getHistory();
  console.log("req: ", params.chat_input, "\nres: ", response, "\nhistory: ", history)
  if ((response.candidates ? response.candidates[0]["finishReason"] : "") == "STOP") {
    return new Response(JSON.stringify({
      chat_history: history,
      chat_output: response.text()
    },))
  }
  if ((response.candidates ? response.candidates[0]["finishReason"] : "") == "SAFETY") {
    return new Response(JSON.stringify({
      chat_history: [...params.chat_history, { parts: [{ text: params.chat_input.toString() }], role: "user" }, { role: "model",  parts: [{ text: "싫어요! 나빠요! 도와주세요!" }]}],
      chat_output: "싫어요! 나빠요! 도와주세요!"
    },))
  }
  return new Response(JSON.stringify({
    chat_history: [...params.chat_history, { parts: [{ text: params.chat_input.toString() }], role: "user" }, { role: "model",  parts: [{ text: "싫어요! 나빠요! 도와주세요!" }]}],
    chat_output: "싫어요! 나빠요! 도와주세요!"
  },))
}


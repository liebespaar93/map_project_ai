"use server"
import { NextResponse, NextRequest } from 'next/server'
import { GoogleGenerativeAI, InputContent } from "@google/generative-ai"

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
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: params.chat_history
  });

  const msg = params.chat_input;

  const result = await chat.sendMessage(msg);
  const response = result.response;
  console.log(response.text());
  return new Response(JSON.stringify({
    chat_history: await chat.getHistory(),
    chat_output: response.text()
  },))
}


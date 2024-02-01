"use server"
import { NextResponse, NextRequest } from 'next/server'

type ResponseData = {
  message: string
}

export async function POST(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
  return NextResponse.json({
    test: "next_api"
  })
}

import { createCompletion, loadModel } from 'gpt4all'

// async function gpt4all_response(params?:any) {
//     const model = await loadModel('tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf');
//     // const response = await createCompletion(model, [
//     //     { role : 'user', content: 'What is 1 + 1?'  } 
//     // ]);
//     // console.log(response.choices[0].message.content);
//     // return response.choices[0].message.content;
//     // console.log(`${process.env.API_HOST}`)
//     return "ss"
// }

import path from 'path'
import fs from 'fs'
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
  const path_dir = path.join(process.cwd(), 'data')
  console.log(path_dir)
  const file = fs.readFileSync(path_dir + "/file.txt")
  console.log(file);
  const model = await loadModel('tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf', { modelPath: path_dir});

  return NextResponse.json({
    test: "s"
  })
}
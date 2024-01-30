type geminiType = {
    chat_history: InputContent
}

type geminiPostReqType = {
    chat_input: string
} & geminiType 

type geminiPostResType = {
    chat_output: string
} & geminiType 

"use client"

import { InputContent } from "@google/generative-ai";
import { useState } from "react";

export default function ModelChat() {
    const [chat_history, set_chat_history] = useState<InputContent[]>([]);
    const [chat_input, set_chat_input] = useState<string>("");
    const [chat_output, set_chat_output] = useState<string>("");

    async function handleSubmitChat(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("next_api/model", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ chat_history, chat_input })
        });
        const param = await res.json().then((value: geminiPostResType) => {
            // set_chat_history(value.chat_history);
            set_chat_history(value.chat_history)
            console.log(value.chat_history)
            console.log(value.chat_output)
            set_chat_output(value.chat_output);
            // set_chat_input("");
        });
    }
    return (
        <form
            onSubmit={handleSubmitChat}
            className="flex flex-col items-center justify-center h-screen"
        >
            <div className="fles items-center justify-center space-x-2">
                <input
                    type="text"
                    value={chat_input}
                    onChange={(e) => set_chat_input(e.target.value)}
                    placeholder="여기에 입력"
                    className="bg-transparent border border-white text-white rounded-lg px-2 py-1"
                />
                <button className="px-2 py-1 border text-white rounded-lg">
                    버튼
                </button>
            </div>
            {chat_output !== "" && (
                chat_output
            )}
        </form>
    )
}
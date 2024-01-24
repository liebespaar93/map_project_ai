"use client"

import { useState } from "react"


export function TranslateInput() {
    const [inText, setInText] = useState("");
    const [outText, setOutText] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("api/python/translate", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ inText })
        });
        const param = await res.json();
        console.log(param)
        setOutText(param.outText);
        setInText("");
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-screen"
        >
            <div className="fles items-center justify-center space-x-2">
                <input
                    type="text"
                    value={inText}
                    onChange={(e) => setInText(e.target.value)}
                    placeholder="여기에 입력"
                    className="bg-transparent border border-white text-white rounded-lg px-2 py-1"
                />
                <button className="px-2 py-1 border text-white rounded-lg">
                    버튼
                </button>
            </div>
            {outText !== "" && (
                <p className="mt-2 text-white">
                    outtext : {outText}</p>
            )}

        </form>
    )
}
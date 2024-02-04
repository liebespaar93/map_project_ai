"use client"

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import KakaoChatReq from './KakaoChatReq'
import KakaoChatRes from './KakaoChatRes'
import ModelChat from '../model_chat'
import { InputContent, Part } from '@google/generative-ai'

type KakaoChatProps = {
    children?: React.ReactNode
}

function KakaoChat(props: KakaoChatProps) {
    const [chat_history, set_chat_history] = useState<InputContent[]>([]);
    const [chat_input, set_chat_input] = useState<string>("");
    const [chat_output, set_chat_output] = useState<string>("");
    const [keybinding, set_key_binding] = useState<boolean>(true);
    const empty_content_model: InputContent = { parts: [{ text: "" }], role: "model" }
    const empty_content_user: InputContent = { parts: [{ text: chat_input }], role: "user" }

    async function handleSubmitChatKeydown(e: React.KeyboardEvent) {
        if (e.key == 'Enter' && keybinding && chat_input.trim()) {
            set_key_binding(false)
            set_chat_input("");
            const check_json = JSON.stringify({ chat_history, chat_input })
            set_chat_history([...chat_history, empty_content_user, empty_content_model])

            const res = await fetch("api_next/model", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: check_json
            });
            const param = await res.json().then((value: geminiPostResType) => {
                set_chat_history(value.chat_history)
                set_chat_output(value.chat_output);
            });
            set_key_binding(true)
        }
    }
    function handleSubmitChatKeyup(e: React.KeyboardEvent) {
    }

    return (
        <div className='flex flex-col-reverse h-full'>
            <div className='flex flex-row-reverse w-full h-12 p-1 bg-kakao-main-white-color'>
                <div className='w-8 text-center text-kakao-main-gray-dark-color'>
                    <button>
                        <span className=" p-1 my-auto material-symbols-outlined">search</span>
                    </button>
                </div>
                <div className='flex-1 m-auto mx-3'>
                    <input
                        type="text"
                        value={chat_input}
                        onChange={(e) => set_chat_input(e.target.value)}
                        className='w-full px-3 rounded-xl bg-kakao-main-gray-light-color text-kakao-text-color'
                        placeholder='물어보기'
                        onKeyDown={handleSubmitChatKeydown}
                        onKeyUp={handleSubmitChatKeyup}
                    />
                </div>
            </div>
            <div className='flex-1 flex-col p-1 overflow-scroll'>
                {props.children ?
                    <div className='block w-full'>
                        <div className='m-auto p-2 rounded-lg border-kakao-main-yellow-color border-2 bg-kakao-main-white-color text-kakao-text-time-color w-5/6 text-center'> {props.children} </div>
                    </div>
                    : undefined
                }
                {chat_history.map((value : any , index) => (
                    <div key={index.toString()}>
                        {value.role == 'model' ?
                            <KakaoChatReq>{value.parts[0] ? value.parts[0]["text"] : ""}</KakaoChatReq> :
                            <KakaoChatRes>{value.parts[0] ? value.parts[0]["text"] : ""}</KakaoChatRes>}
                    </div>
                ))}
            </div>
        </div>
    )
}

KakaoChat.propTypes = {}

export default KakaoChat

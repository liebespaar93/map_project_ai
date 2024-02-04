"use client"

import React, { useState } from 'react'
import KakaoTitle from './KakaoTitle'
import KakaoChat from './KakaoChat'

type KakaoChatFormProps = {
    children?: React.ReactNode
}

function KakaoChatForm(props: KakaoChatFormProps) {
    return (
        <div className='flex flex-col h-full'>
            <div className="h-16">
                <KakaoTitle back_url="/" title="밥 먹고 싶다">
                    <button>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </KakaoTitle>
            </div>
            <div className="flex-1 flex-col overflow-hidden">
                <KakaoChat>
                </KakaoChat>
            </div>
        </div>
    )
}

KakaoChatForm.propTypes = {}

export default KakaoChatForm

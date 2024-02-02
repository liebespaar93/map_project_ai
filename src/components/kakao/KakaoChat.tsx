import React from 'react'
import PropTypes from 'prop-types'
import KakaoChatReq from './KakaoChatReq'
import KakaoChatRes from './KakaoChatRes'

type KakaoChatProps = {
    children?: React.ReactNode
}

function KakaoChat(props: KakaoChatProps) {
    return (
        <div className='flex flex-col-reverse h-full'>
            <div className='flex flex-row-reverse w-full h-12 p-1 bg-kakao-main-white-color'>
                <div className='w-8 text-center text-kakao-main-gray-dark-color'>
                    <button>
                        <span className=" p-1 my-auto material-symbols-outlined">search</span>
                    </button>
                </div>
                <div className='flex-1 m-auto mx-3'>
                    <input className='w-full px-3 rounded-xl bg-kakao-main-gray-light-color text-kakao-main-gray-dark-color' placeholder='검색'></input>
                </div>
            </div>
            <div className='flex-1 flex-col p-1 overflow-scroll'>
                {props.children ?
                    <div className='block w-full'>
                        <div className='m-auto p-2 rounded-lg border-kakao-main-yellow-color border-2 bg-kakao-main-white-color text-kakao-text-time-color w-5/6 text-center'> {props.children} </div>
                    </div>
                    : undefined
                }
                <KakaoChatRes>hi</KakaoChatRes>
                <KakaoChatReq>hi?</KakaoChatReq>
                <KakaoChatRes>개포동 맛집?</KakaoChatRes>
                <KakaoChatReq>
                    <div className='Markdown'>
                        <p>개포동 맛집 5곳을 추천해 드리겠습니다.</p>
                        <ul>
                            <li>원조소금구이 - 24시간 영업하는 소금구이 전문점입니다.</li>
                            <li>이모네전 - 다양한 종류의 전과 찌개를 맛볼 수 있는 곳입니다.</li>
                            <li>문어다 - 문어 요리를 전문으로 하는 곳입니다.</li>
                            <li>시골밥상 - 푸짐한 한정식을 맛볼 수 있는 곳입니다.</li>
                            <li>심숙이 - 깔끔한 한식을 맛볼 수 있는 곳입니다.</li>
                        </ul>
                        <p>이 중에서 어떤 음식을 좋아하시는지 알려주시면 더 구체적인 추천을 해 드리겠습니다.</p>
                    </div>
                </KakaoChatReq>
                <KakaoChatRes>되는거 맞나?</KakaoChatRes>
                <KakaoChatReq>그럼??</KakaoChatReq>
                <KakaoChatRes></KakaoChatRes>
                <KakaoChatReq></KakaoChatReq>
            </div>
        </div>
    )
}

KakaoChat.propTypes = {}

export default KakaoChat

import React from 'react'
import PropTypes from 'prop-types'
import ReMarkChat from '../ReMarkChat'

type KakaoChatResProps = {
    image?: string,
    text?: string
    children?: React.ReactNode
}

function KakaoChatRes(props: KakaoChatResProps) {
    return (
        <div className='w-full flex justify-end'>
            <div className='max-w-3/4 m-1 px-3 py-1 rounded-xl rounded-tr-none bg-kakao-res-msg-box-color text-kakao-text-color after:w-2 ' >
                {props.text || props.children ?
                    <div>
                        <ReMarkChat text={props.text}>{props.children}</ReMarkChat>
                    </div> :
                    <div className='text-kakao-text-time-color'>
                        <span className="material-symbols-outlined">more_horiz</span>
                    </div>
                }
            </div>
        </div>
    )
}

KakaoChatRes.propTypes = {
    msg: PropTypes.string
}

export default KakaoChatRes

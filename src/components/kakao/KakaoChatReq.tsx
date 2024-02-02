import React from 'react'
import PropTypes from 'prop-types'

type KakaoChatReqProps = {
    image?: string,
    children?: React.ReactNode
}
function KakaoChatReq(props: KakaoChatReqProps) {
    return (
        <div className='w-full flex justify-start'>
            <div className='max-w-3/4 m-1 px-3 py-1 rounded-xl rounded-tl-none bg-kakao-req-msg-box-color text-kakao-text-color'>
                {props.children ?
                    props.children :
                    <div className='text-kakao-text-time-color'>
                        <span className="material-symbols-outlined">more_horiz</span>
                    </div>}
            </div>
        </div>
    )
}

KakaoChatReq.propTypes = {
    msg: PropTypes.string
}

export default KakaoChatReq

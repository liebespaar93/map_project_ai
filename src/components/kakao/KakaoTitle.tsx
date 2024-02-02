import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

type KakaoTitleProps = {
    title: string,
    children?: React.ReactNode
} & backurl_type

function KakaoTitle(props: KakaoTitleProps) {
    return (
        <div className='h-full grid grid-cols-3 gap-1 content-center'>
            <div className='flex-auto text-left ml-4'>
                <Link href={props.back_url}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </Link>
            </div>
            <div className='flex-auto text-center'>
                {props.title}
            </div>
            <div className='flex-auto text-right mr-4'>
                {props.children}
            </div>
        </div>
    )
}

KakaoTitle.propTypes = {
    title: PropTypes.string
}

export default KakaoTitle

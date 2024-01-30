"use client"

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function KakaoMap() {
    const key: string | undefined = process.env.NEXT_KAKAO_APIKEY
    const [loading, error] = useKakaoLoader({
        appkey: key ? key : ""
    })
    if (error)
        return <div>Kakao Map error</div>
    return <></>
}

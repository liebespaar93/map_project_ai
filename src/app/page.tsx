"use client"
import Image from "next/image";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
const Component = () => {
  const key: string | undefined = process.env.NEXT_PUBLIC_APPKEY

  const [loading, error] = useKakaoLoader({
    appkey: key ? key : ""
  })
  const url: string = "//dapi.kakao.com/v2/maps/sdk.js?appkey=" + key + "&libraries=services,clusterer"
  console.log(url)

  return <Map
    center={{ lat: 33.5563, lng: 126.79581 }}
    style={{ width: "100%", height: "360px" }}
  >
    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
      <div style={{ color: "#000" }}>Hello World!</div>
    </MapMarker>

  </Map>

}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Component />
    </main >
  );
}

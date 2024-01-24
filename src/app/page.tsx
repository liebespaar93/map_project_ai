<<<<<<< HEAD
import KakaoMap from "@/components/kakaomap";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import styles from './styles.module.css'
=======
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
>>>>>>> a48388c59161d0b5fd184b09e7a714d05776942b

export default function Home() {

  return (
<<<<<<< HEAD
    <main>
      <div className={styles.main_ctn}>
        <KakaoMap />
        <div className={`${styles.title_box} ${styles.width_640px}`}>
          <div className={styles.title_text}>
            title
          </div>
          <div className={styles.search_box}>
            <input className={styles.search_inp} defaultValue="애플" />
            <button className={styles.search_btn}> 검색 </button>
          </div>
          <div className={styles.keyword_box}>
            <div className={styles.keyword_title}>Keyword</div>
            <div className={styles.keyword_list}>
              키워드1?
              키워드2?
              키워드3?
            </div>
          </div>
        </div>
        <div className={styles.map_box}>
          <div className={styles.map_title}>Kakao Map</div>
          <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
          </Map>
        </div>
      </div>
=======
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Component />
>>>>>>> a48388c59161d0b5fd184b09e7a714d05776942b
    </main >
  );
}

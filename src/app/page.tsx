import KakaoMap from "@/components/kakaomap";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import styles from './styles.module.css'
import Link from "next/link";
import { SearchApi } from "@/components/search/SearchApi";

export default function Home() {
  return (
    <main>
      <div >
        <div className=" w-full from-neutral-50">테스트 바로가기</div>
        <Link href={"./child"} >
          <div className="w-full  bg-blue-400 rounded">
            <p>변역 테스트</p>
            <p> url : child</p>
          </div>
        </Link>
      </div>
      <div className={styles.main_ctn}>
        <KakaoMap />
        <div className={`${styles.title_box} ${styles.width_640px}`}>
          <div className={styles.title_text}>
            title
          </div>
          <SearchApi/>
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
    </main >
  );
}

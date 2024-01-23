import KakaoMap from "@/components/kakaomap";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import styles from './styles.module.css'

export default function Home() {

  return (
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
    </main >
  );
}

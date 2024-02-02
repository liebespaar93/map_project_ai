import KakaoMap from "@/components/kakaomap";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import styles from './styles.module.css'
import style_kakao from '@/styles/kakao.module.css'

import Link from "next/link";
import { SearchApi } from "@/components/search/SearchApi";
import Chat from "@/components/kakao/KakaoChat";
import KakaoTitle from "@/components/kakao/KakaoTitle";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-screen h-screen max-lg:w-96 m-auto bg-kakao-main-blue-color">
        <div className=" h-16">
          <KakaoTitle back_url="/" title="밥 먹고 싶다">
            <button>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </KakaoTitle>
        </div>
        <div className="flex-1 flex-col overflow-hidden">
          <Chat >
          </Chat>
        </div>
      </div>
      <div className="m-auto w-screen h-screen max-lg:w-96 bg-kakao-main-white-color text-kakao-text-color">
        <div className="flex flex-col h-full overflow-hidden">
          <div className="h-12 p-3 text-lg bg-kakao-main-yellow-color text-kakao-main-brown-color">Kakao Map</div>
          <div className="">
            <KakaoMap />
            <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "360px" }}>
              <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker>
              <MapMarker position={{ lat: 33.5564, lng: 126.79687 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker>
            </Map>
          </div>
          <div className="flex flex-col overflow-auto p-2 border-t-2 border-kakao-main-brown-color ">
            {/* <div className="absolute self-center w-4 h-2 bg-kakao-main-gray-light-color"> ss</div> */}
            <div className="w-32 p-1 text-center border-4 border-b-0 rounded-t-xl bg-kakao-main-yellow-color border-kakao-main-yellow-color"> 곰돌이 </div>
            <div></div>
            <div className="w-full h-full p-2 rounded-xl rounded-tl-none border-4 border-kakao-main-yellow-color">
              <div className="flex justify-between text-center ">
                <button className="w-4 m-1">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="m-auto text-center font-medium">
                  Title
                </div>
                <button className="w-4 m-1">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              <div className="flex-1 flex-col p-1 overflow-scroll">
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
                <p>뭘 너야 햘까 데이터를 받아본다음 생각</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div >
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
      </div> */}
    </main >
  );
}

import Image from "next/image";

export default function Home() {
  const key: string | undefined = process.env.REACT_APP_KAKAO_API_KEY
  const url: string = "//dapi.kakao.com/v2/maps/sdk.js?appkey=" + key + "&libraries=services,clusterer"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="map">

      </div>
      <script
        type="text/javascript"
        src={url}
        async />
    </main >
  );
}

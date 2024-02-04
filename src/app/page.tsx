import KakaoChatForm from "@/components/kakao/KakaoChatFrom";
import KakaoMapForm from "@/components/kakao/KakaoMapForm";

export default function Home() {
  return (
    <main className="flex">
      <div className="max-lg:w-full w-96 min-w-96 h-screen bg-kakao-main-blue-color">
        <KakaoChatForm/>
      </div>
      <div className="m-auto w-full max-lg:w-0 h-screen bg-kakao-main-white-color text-kakao-text-color">
        <KakaoMapForm></KakaoMapForm>
      </div>
    </main >
  );
}

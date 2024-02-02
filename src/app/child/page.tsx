import { TranslateInput } from "@/components/TranslateInput";
import ModelChat from "@/components/model_chat";
import { exec, fork, spawn } from "child_process";
import Link from "next/link";

export default function Child() {
  return (
    <main>
      <Link href={"/"} >
        <div className=" w-full bg-blue-400 rounded">
          <p>돌아가기</p>
          <p> url :</p>
        </div>
      </Link>
      {/* <TranslateInput /> */}
      <ModelChat />
      Child process 테스트를 위한 곳입니다
    </main>
  );
}

import { TranslateInput } from "@/components/TranslateInput";
import { exec, fork, spawn } from "child_process";
import Link from "next/link";

/* exec 
exec("ls", (err, stdout, stderr) => {
  if (err) {
    console.log("exec error: ", err);
    return;
  }
  console.log(stdout, stderr);
});
*/

/* spawn
const child = spawn("echo", ["how", "are", "you"])

child.stdout.on("data", (data) => {
  console.log('stdout :', data);
  console.log(`stdout : ${data}`);
});

child.stderr.on("data", (data) => {
  console.log('stderr', data);
});
*/

/* fork
const child = fork("./src/app/child/echo.ts", ["how", "are", "you"])

child.on("message", (msg) => {
  console.log('stdout', msg);
})

child.on("close", (code) => {
  console.log('close ', code);
})
*/

export default function Child() {
  return (
    <main>
      <Link href={"/"} >
        <div className=" w-full  bg-blue-400 rounded">
          <p>돌아가기</p>
          <p> url :</p>
        </div>
      </Link>
      <TranslateInput />
      Child process 테스트를 위한 곳입니다
    </main>
  );
}

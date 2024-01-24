# map_project_ai
'map_project_ai' 는 맵 사용자가 좀더 편하게 원하는 목적지를 찾게 도와주는 사이트입니다.


# 🌏 실행 환경

```bash
npm i -g vercel
```

환경 설정 하기
git isuue [여기 참고](https://github.com/vercel/vercel/discussions/5019)
```bash
mkdir ~/.npm-global
export NPM_CONFIG_PREFIX=~/.npm-global
export PATH=$PATH:~/.npm-global/bin
echo -e "export NPM_CONFIG_PREFIX=~/.npm-global\nexport PATH=$PATH:~/.npm-global/bin" >> ~/.bashrc
```

# 📡 api
## 환경 세팅

vercel.json
---
```json
{
    "redirects": [
        {
            "source": "/api",
            "destination": "/api"
        }
    ]
}
```

폴더 구조
---
```bash
├── README.md
├── api
|  └── user.py
├── data
|  └── file.txt
└── requirements.txt
```

## python
### python 환경 세팅

🚀 참조
---
🔗 링크 :https://vercel.com/docs/functions/serverless-functions/runtimes/python#python-version

Pipfile
 ---
```Ini
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"
 
[packages]
flask = "*"
 
[requires]
python_version = "3.9"
```

requirements.txt
```bash
googletrans==3.1.0a0
gpt4all==2.1.0
```
---

### BaseHTTPRequestHandler

#### json

🚀 참조
---
🔗 링크 : https://stackoverflow.com/questions/41429172/python-basehttprequesthandler-respond-with-json

🍝 코드
---

```python
from http.server import BaseHTTPRequestHandler
from googletrans import Translator
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        request_path = self.path
        
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        translater = Translator()

        inText = data["inText"]
        result = translater.translate(inText)

        print(
            "input : " + inText,
            "\noutput : " + result.text,
        )

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        json_string = json.dumps({"outText" : result.text})
        self.wfile.write(json_string.encode(encoding='utf_8'))
        return
```


## ERROR
### 모델 다운중 중간 끊김으로 인한 모델 불안정성
```bash
/home/<user>/.cache/gpt4all
```
에 있는 모델을 삭제하고 다시 받는다 

🔗 참조 : https://github.com/nomic-ai/gpt4all/issues/1235


## 모델 양자화

🔗 참조 : https://huggingface.co/blog/trl-peft

🔗 참조 : https://huggingface.co/blog/hf-bitsandbytes-integration


## node 메모리 한계치 조정
export NODE_OPTIONS=--max_old_space_size=6192
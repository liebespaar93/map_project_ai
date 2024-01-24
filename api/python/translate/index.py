from http.server import BaseHTTPRequestHandler
from googletrans import Translator
import json

from .tools import *


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        request_path = self.path

        print("\n----- Request Start ----->\n")
        print("request_path :", request_path)
        print("self.headers :", self.headers)
        print("<----- Request End -----\n")

        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        translater = Translator()

        inText = "안녕"
        print(self)
        result = translater.translate(inText)

        print(
            fg.LYELLOW + "input : " + fg.RESET + inText,
            fg.LGREEN + "\noutput : " + fg.RESET + result.text,
        )
        self.wfile.write(result.text.encode("utf-8"))
        return
  
    def do_POST(self):
        request_path = self.path

        print("\n----- Request Start ----->\n")
        print("request_path :", request_path)
        print("self.headers :", self.headers)
        print("<----- Request End -----\n")

        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        translater = Translator()

        inText = data["inText"]
        result = translater.translate(inText)

        print(
            fg.LYELLOW + "input : " + fg.RESET + inText,
            fg.LGREEN + "\noutput : " + fg.RESET + result.text,
        )

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        json_string = json.dumps({"outText" : result.text})
        self.wfile.write(json_string.encode(encoding='utf_8'))
        return
        
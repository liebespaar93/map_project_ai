"use client"

import { useState } from "react"
import styles from './styles.module.css'

export function SearchApi() {
    const [inText, setInText] = useState("애플");
    const [outText, setOutText] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("api/python/translate", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ inText })
        });
        const param = await res.json();
        console.log(param)
        setOutText(param.outText);
        setInText("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className={styles.search_box}>
                    <input
                        className={styles.search_inp}
                        type="text"
                        value={inText}
                        onChange={(e) => setInText(e.target.value)}
                        />
                    <button className={styles.search_btn}> 검색 </button>
                </div>
                <div className={styles.keyword_list}>
                    <p>아직 변역까지만 지원하고 있습니다~</p>
                    {outText !== "" && (
                        <div>
                            <p>outtext : {outText}</p>
                        </div>
                    )}
                </div>
            </form>
            <div className={styles.keyword_box}>
                <div className={styles.keyword_title}>Keyword</div>
                <div className={styles.keyword_list}>
                    키워드1?
                    키워드2?
                    키워드3?
                </div>
            </div>
        </div>
    )
}
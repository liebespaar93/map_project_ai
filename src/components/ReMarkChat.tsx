'use client'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

import { useState } from 'react'
type ReMarkChatProps = {
    text?: string
    children?: React.ReactNode
}

function ReMarkChat(props: ReMarkChatProps) {
    const input = '## Markdown'
    const [VFileValue, setVFileValue] = useState<Uint8Array | string>("")

    const contentHtml = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(props.text)
        .then((VFile) => {
            setVFileValue(VFile.value)
        })
    return <div>
        <div dangerouslySetInnerHTML={{ __html: VFileValue }} />
        {props.children}
    </div>
}


export default ReMarkChat
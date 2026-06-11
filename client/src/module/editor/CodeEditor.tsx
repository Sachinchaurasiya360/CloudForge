import { Editor } from "@monaco-editor/react"
export default function CodeEditor(){
  return (
    <div>
<Editor
height="100%"
defaultLanguage="javascript"
defaultValue="Write your code here"
theme="vs-dark"
loading="loading..."
/>


    </div>
  )
}
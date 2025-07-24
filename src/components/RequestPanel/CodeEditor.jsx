import { Editor } from "@monaco-editor/react";
import { useState } from "react";
export default function CodeEditor() {
    const [value, setValue] = useState("");

    return(<>
        <Editor value={value}
                onChange={(value) => setValue(value)}
                className="border border-gray-400 pt-2.5 h-full"
                height="80vh"
                language="json"
                defaultValue='{"nigga":"niggaman"}' />
    </>)
}
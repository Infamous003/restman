import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
export default function CodeEditor({ defaultVal }) {
    const [value, setValue] = useState("");

    useEffect(() => {
        const newVal = defaultVal;
        setValue(newVal);
    }, [defaultVal]);

    return(<>
        <Editor value={value}
                onChange={(value) => setValue(defaultVal)}
                className="border border-gray-400 pt-2.5 h-full"
                height="80vh"
                language="json"/>
    </>)
}
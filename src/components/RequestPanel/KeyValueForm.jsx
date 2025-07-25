import { useState } from "react"
import { FaTrash } from "react-icons/fa"

export default function KeyValueForm({ id, keyName, valueName, onChange, handleDelete, setQueryData}) {
    return(
    <div className="flex mb-2">
        <input value={keyName}
               onChange={(e) => onChange(id, setQueryData, "key", e.target.value)}
               type="text"
               className="border-y border-l w-full border-gray-400 px-2 py-1 focus:outline-none" placeholder="Key"/>
        <input value={valueName}
               onChange={(e) => onChange(id, setQueryData, "value", e.target.value)}
               type="text"
               className="border-y border-x w-full border-gray-400 px-2 py-1 focus:outline-none" placeholder="Value"/>
        <FaTrash onClick={() => handleDelete(id, setQueryData)} className="text-4xl ml-2.5 cursor-pointer" />
    </div>)
}
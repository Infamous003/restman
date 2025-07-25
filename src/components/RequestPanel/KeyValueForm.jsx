import { FaTrash } from "react-icons/fa"

export default function KeyValueForm({ id, keyName, valueName, enabled, onChange, handleDelete, setStateFunc}) {
    return(
    <div className="flex mb-2">
        <input value={keyName}
               onChange={(e) => onChange(id, setStateFunc, "key", e.target.value)}
               type="text"
               disabled={!enabled}
               className={`border-y border-l w-full border-gray-400 px-2 focus:outline-none disabled:opacity-55 disabled:cursor-not-allowed`} placeholder="Key"/>
        <input value={valueName}
               onChange={(e) => onChange(id, setStateFunc, "value", e.target.value)}
               type="text"
               disabled={!enabled}
               className="border-y border-x w-full border-gray-400 px-2 focus:outline-none  disabled:opacity-55 disabled:cursor-not-allowed" placeholder="Value"/>
        <input type="checkbox"
               defaultChecked={enabled}
               onChange={(e) => onChange(id, setStateFunc, "enabled", e.target.checked)} 
               className="ml-2.5 border-2" />
        <FaTrash onClick={() => handleDelete(id, setStateFunc)} className="text-3xl ml-2.5 cursor-pointer" />
    </div>)
}
import { FaTrash } from "react-icons/fa"
import { handleChange, handleDelete } from "../../utils"

export default function KeyValueForm({ id, keyName, valueName, enabled, sectionKey, setFormData}) {
    return(
    <div className="flex mb-2">
        <input value={keyName}
               onChange={(e) => handleChange(id, "key", e.target.value, sectionKey, setFormData)}
               type="text"
               disabled={!enabled}
               className={`border-y border-l w-full border-gray-400 px-2 focus:outline-none disabled:opacity-55 disabled:cursor-not-allowed`} placeholder="Key"/>
        <input value={valueName}
               onChange={(e) => handleChange(id, "value", e.target.value, sectionKey, setFormData)}
               type="text"
               disabled={!enabled}
               className="border-y border-x w-full border-gray-400 px-2 focus:outline-none  disabled:opacity-55 disabled:cursor-not-allowed" placeholder="Value"/>
        <input type="checkbox"
               defaultChecked={enabled}
               onChange={(e) => handleChange(id, "enabled", e.target.checked, sectionKey, setFormData)} 
               className="ml-2.5 border-2" />
        <FaTrash onClick={() => handleDelete(id, sectionKey, setFormData)} className="text-3xl ml-2.5 cursor-pointer" />
    </div>)
}
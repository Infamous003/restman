import { FaTrash } from "react-icons/fa"
import { handleChange, handleDelete } from "../../utils"

export default function KeyValueForm({ id, keyName, valueName, enabled, sectionKey, setRequest}) {
    return(
    <div className="flex mb-2">
        <input value={keyName}
               onChange={(e) => handleChange(id, "key", e.target.value, sectionKey, setRequest)}
               type="text"
               name="formKey"
               disabled={!enabled}
               className={`border-y border-l w-full border-gray-400 px-2 focus:outline-none disabled:opacity-55 disabled:cursor-not-allowed`} placeholder="Key"/>
        <input value={valueName}
               onChange={(e) => handleChange(id, "value", e.target.value, sectionKey, setRequest)}
               type="text"
               name="formValue"
               disabled={!enabled}
               className="border-y border-x w-full border-gray-400 px-2 focus:outline-none  disabled:opacity-55 disabled:cursor-not-allowed" placeholder="Value"/>
        <input type="checkbox"
               defaultChecked={enabled}
               name="enabled"
               onChange={(e) => handleChange(id, "enabled", e.target.checked, sectionKey, setRequest)} 
               className="ml-2.5 border-2" />
        <FaTrash onClick={() => handleDelete(id, sectionKey, setRequest)} className="text-3xl ml-2.5 cursor-pointer" />
    </div>)
}
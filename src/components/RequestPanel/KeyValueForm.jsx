import { useState } from "react"
import { FaTrash } from "react-icons/fa"

export default function KeyValueForm({ handleDelete, id }) {

    return(
    <div className="flex mb-2">
        <input type="text" className="border-y border-l w-full border-gray-400 px-2 py-1 focus:outline-none" placeholder="Key"/>
        <input type="text" className="border-y border-x w-full border-gray-400 px-2 py-1 focus:outline-none" placeholder="Value"/>
        <FaTrash onClick={() => handleDelete(id)} className="text-4xl ml-2.5 cursor-pointer" />
    </div>)
}
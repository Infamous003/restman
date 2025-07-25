import { nanoid } from "nanoid";

export function addKeyValueForm(e, setStateFunc) {
    e.preventDefault()
    // Creating a new form with a random id and empty key and value
    setStateFunc((prev) => [...prev, {id: nanoid(), key: "", value: "", isEnabled: false}])
}

export function handleDelete(id, setStateFunc) {
    setStateFunc(prev => prev.filter(item => item.id !== id));
}

export function handleChange(id, setStateFunc, field, newValue) {
    // Loop thru the prevList, find the item with `id`, if found, then set it's field to new value, else, set it to item itself
    setStateFunc(prev => 
        prev.map(item => item.id == id ? {...item, [field]: newValue} : item)
    )
}

// export function handleCheckBox(id, setStateFunc) {
//     setStateFunc(prev => 
//         prev.map
//     )
// }
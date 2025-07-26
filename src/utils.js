import { nanoid } from "nanoid";

export function addKeyValueForm(e, sectionKey, setFormData) {
    e.preventDefault()
    const newItem = {
        id: nanoid(),
        key: "",
        value: "",
        enabled: true
    }

    // Creating a new form with a random id and empty key and value
    setFormData(prev => ({
        ...prev,
        [sectionKey]: [...prev[sectionKey], newItem]
    }))
}

export function handleDelete(id, sectionKey, setFormData) {
    // console.log(id, sectionKey)
    setFormData(prev => ({
        ...prev,
        [sectionKey]: prev[sectionKey].filter(item => item.id !== id)
    }))
}

export function handleChange(id, field, newValue, sectionKey, setFormData) {
    // Loop thru the prevList, find the item with `id`, if found, then set it's field to new value, else, set it to item itself
    setFormData(prev => ({
        ...prev,
        [sectionKey]: prev[sectionKey].map(item => item.id == id ? {...item, [field]: newValue} : item)
    }))
}
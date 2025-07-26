
export default function AuthForm({ prefix, token, formData, setFormData}) {
    return(
    <div className="flex flex-col">
        <div className="flex items-center mb-2">
            <label htmlFor="" className="px-2 py-1 border border-gray-400 w-24">Enabled</label>
            <div className="px-2 py-1 flex-1 border-y border-r border-gray-400">
                <input  type="checkbox"
                        defaultChecked={formData.auth.enabled}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            ["auth"]: {...prev["auth"], enabled: e.target.checked}
                        }))}/>
            </div>
        </div>

        <div className="flex items-center mb-2">
            <label htmlFor="token" className="w-24 px-2 py-1 border border-gray-400">Token</label>    
            <input name="token"
                   value={token}
                   onChange={(e) => setFormData(prev => ({
                    ...prev,
                    ["auth"]: {...prev["auth"], token: e.target.value}
                   }))}
                   type="text"
                   disabled={!formData.auth.enabled}
                   className={`flex-1 border-y border-r border-gray-400 px-2 py-1 focus:outline-none disabled:opacity-55 disabled:cursor-not-allowed`} placeholder="Key"/>
        </div>
        <div className="flex items-center">
            <label htmlFor="prefix" className="w-24 px-2 py-1 border border-gray-400">Prefix</label>
            <input name="prefix"
                   value={prefix}
                   onChange={(e) => setFormData(prev => ({
                    ...prev,
                    ["auth"]: {...prev["auth"], prefix: e.target.value}
                   }))}
                   type="text"
                   disabled={!formData.auth.enabled}
                   className="flex-1 border-y border-r border-gray-400 px-2 py-1 focus:outline-none  disabled:opacity-55 disabled:cursor-not-allowed" placeholder="Value"/>
        </div>    
    </div>)
}
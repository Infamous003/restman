import { Tabs } from "radix-ui";

export default function RequestForm() {
    return(<>
        <form action="">
            <div className="url-section flex">
                <select name="" className="border-y-1 border-l-1 px-2 border-gray-400 cursor-pointer font-bold focus:outline-none">
                    <option value="get" className="text-green-700 font-semibold">GET</option>
                    <option value="post" className="text-blue-700 font-semibold">POST</option>
                    <option value="put" className="text-yellow-700 font-semibold">PUT</option>
                    <option value="delete" className="text-red-700 font-semibold">DELETE</option>
                </select>


                <input type="text" placeholder="https://www.example.com" className="flex-auto h-8 border-y-1 px-2.5 py-0 border-gray-400  focus:outline-none focus:border-gray-400" />
                
                <button type="submit" className="bg-gray-700 px-4 text-white cursor-pointer font-bold">Send</button>
            </div>

            <div className="meta-data-section py-2">
                <Tabs.Root className="TabsRoot flex flex-col gap-2" defaultValue="tab1">
                    <Tabs.List className="TabsList flex bg-gray-200" aria-label="Manage your account">
                        <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab1">
                            Body
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab2">
                            Query
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab3">
                            Header
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab4">
                            Auth
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content className="TabsContent px-2" value="tab1">
                        <p className="Text">
                            This is the body tab section. You enter the json body here
                        </p>                        
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab2">
                        <p className="Text">
                            All the query parameters go here
                        </p>                        
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab3">
                        <p className="Text">
                            All the headers go here
                        </p>                        
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab4">
                        <p className="Text">
                            Authentication details go here
                        </p>                        
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </form>
    </>)
}
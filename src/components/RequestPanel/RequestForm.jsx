import { Tabs } from "radix-ui";
import CodeEditor from "./CodeEditor";
import KeyValueForm from "./KeyValueForm";
import AuthForm from "./AuthForm";
import {addKeyValueForm} from "../../utils";
import { useState } from "react";

export default function RequestForm({ request, setRequest, response, setResponse }) {
    function formatTime(time) {
        if (time >= 1000) {
            return (time / 1000).toFixed(2) + " s";
        }
        return time.toFixed(0) + " ms";
    }

    async function handleFormSubmit(event) {
        event.preventDefault();

        const url = request.url;
        const method = request.method;
        let headers = {};
        const queries = request.query;
        const auth = request.auth;
        
        request.headers.forEach(header => {
            headers[header.key.toLowerCase()] = header.value
        })

        const start = performance.now();
        await fetch(url, {
            method: method,
            headers: {...headers},
        })
        .then(async response => {
            const end = performance.now();
            const responseTime = end - start;
            const body = await response.json();
            const responseHeaders = {};

            response.headers.forEach((value, key) => {
                responseHeaders[key] = value;
            });
            responseHeaders["Date"] = response.headers.get("date");
            responseHeaders["Size"] = response.headers.get("size");
            setResponse({
                statusCode: response.status,
                detail: response.statusText,
                body: body,
                headers: responseHeaders,
                responseTime: formatTime(responseTime),
                responseSize: responseHeaders["content-length"]
            });
        })
    }

    return(<>
        <form className="h-full" onSubmit={(e) => handleFormSubmit(e)}>
            <div className="url-section flex">
                <select onChange={(e) => setRequest(prev => ({...prev, method: e.target.value}))}
                        name="method"
                        className="border-y-1 border-l-1 px-2 border-gray-400 cursor-pointer font-bold focus:outline-none">
                    <option value="GET" className="text-green-700 font-semibold">GET</option>
                    <option value="POST" className="text-blue-700 font-semibold">POST</option>
                    <option value="PUT" className="text-yellow-700 font-semibold">PUT</option>
                    <option value="DELETE" className="text-red-700 font-semibold">DELETE</option>
                </select>


                <input  value={request.url}
                        onChange={(e) => setRequest(prev => ({...prev, url: e.target.value}))}
                        type="text" 
                        name="url" 
                        placeholder="https://www.example.com" 
                        className="flex-auto h-8 border-y-1 px-2.5 py-0 border-gray-400  focus:outline-none focus:border-gray-400" />
                
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

                    <Tabs.Content className="TabsContent" value="tab1">
                        <CodeEditor></CodeEditor>
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab2">
                        { 
                            request["query"].map((item) => 
                                        <KeyValueForm key={item.id}
                                                      id={item.id}
                                                      keyName={item.key}
                                                      valueName={item.value}
                                                      enabled={item.enabled}
                                                      sectionKey="query"
                                                      setRequest={setRequest} />)
                        }
                        <button type="button"
                                className="bg-gray-700 px-4 py-1.5 text-white cursor-pointer font-bold w-full"
                                onClick={(e) => addKeyValueForm(e, "query", setRequest)}>
                            + Add item
                        </button>
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab3">
                        { 
                            request["headers"].map((item) => 
                                        <KeyValueForm key={item.id}
                                                      id={item.id}
                                                      keyName={item.key}
                                                      valueName={item.value}
                                                      enabled={item.enabled}
                                                      sectionKey="headers"
                                                      setRequest={setRequest} />)
                        }
                        <button type="button"
                                className="bg-gray-700 px-4 py-1.5 text-white cursor-pointer font-bold w-full"
                                onClick={(e) => addKeyValueForm(e, "headers", setRequest)}>
                            + Add item
                        </button>
                    </Tabs.Content>

                    <Tabs.Content className="TabsContent" value="tab4">
                        <AuthForm prefix={request["auth"]["prefix"]}
                                  token={request["auth"]["token"]}
                                  enabled={request["auth"]["enabled"]}
                                  request={request}
                                  setRequest={setRequest}/>
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </form>
    </>)
}
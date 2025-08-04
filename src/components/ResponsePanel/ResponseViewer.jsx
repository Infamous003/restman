import { Tabs } from "radix-ui";
import CodeEditor from "../RequestPanel/CodeEditor";
import { useEffect, useState } from "react";

export default function ResponseViewer({ response }) {
  console.log(response)
  const headers = []
  for (let key in response.headers) {
    headers.push(
      <li>{key} : {response.headers[key]}</li>
    )
  }

  return (
  <>
    <div className="p-2.5 border-l-1 border-gray-400 h-full">
      <div className="flex gap-3 py-1">
        <p className="px-2 bg-orange-400 ">{ response.statusCode }</p>
        <p className="px-2 bg-gray-200">{ response.responseTime }</p>
        <p className="px-2 bg-gray-200">{response.responseSize} B</p>
      </div>

      <div className="meta-data-section py-2">
        <Tabs.Root className="TabsRoot flex flex-col gap-2" defaultValue="tab1">
          <Tabs.List className="TabsList flex bg-gray-200" aria-label="Manage your account">
              <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab1">
                Preview
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab2">
                Header
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab3">
                Request
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab4">
                Tests
              </Tabs.Trigger>
              <Tabs.Trigger className="TabsTrigger px-2.5 py-1.5 hover:bg-gray-300 cursor-pointer focus:bg-gray-300 data-[state=active]:bg-gray-300" value="tab4">
                Timeline
              </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="TabsContent" value="tab1">
              <CodeEditor defaultVal={response.body ? JSON.stringify(response.body) : "No response body yet."}>
              </CodeEditor>
          </Tabs.Content>

          <Tabs.Content className="TabsContent" value="tab2">
            {
              ...headers
            }
          </Tabs.Content>

          <Tabs.Content className="TabsContent" value="tab3">
              Request that was made along with headers(the ones that user entered)
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  </>);
}

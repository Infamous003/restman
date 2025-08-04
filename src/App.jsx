import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import RequestBuilder from './components/RequestPanel/RequestBuilder';
import ResponseViewer from './components/ResponsePanel/ResponseViewer';

function App() {
  const [requestData, setRequestData] = useState({
    url: "",
    method: "GET",
    query: [],
    headers: [{id: 1, 
                key: "Content-Type", 
                value: "application/json", 
                enabled: true
            }],
    auth: {
        prefix: "bearer", 
        token: "", 
        enabled: true
    },
  });

  const [responseData, setResponseData] = useState({
    statusCode: null,
    detail: "",
    body: null,
    header: [],
    responseTime: null,
    responseSize: null,
  })

  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <main className='flex-1 grid grid-cols-2'>
        <RequestBuilder request={requestData}
                        setRequest={setRequestData}
                        response={responseData}
                        setResponse={setResponseData} />

        <ResponseViewer response={responseData}/>
      </main>
    </div>
  )
}

export default App

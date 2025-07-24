import './App.css'
import Header from './components/Header';
import RequestBuilder from './components/RequestPanel/RequestBuilder';
import ResponseViewer from './components/ResponsePanel/ResponseViewer';

function App() {
  return (
    <div className='h-full flex flex-col'>
      <Header></Header>
      <main className='flex-grow grid grid-cols-2'>
        <RequestBuilder />
        <ResponseViewer />
      </main>
    </div>
  )
}

export default App

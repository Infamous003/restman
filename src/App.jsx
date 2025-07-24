import './App.css'
import Header from './components/Header';
import RequestBuilder from './components/RequestPanel/RequestBuilder';
import ResponseViewer from './components/ResponsePanel/ResponseViewer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <main className='flex-1 grid grid-cols-2'>
        <RequestBuilder />
        <ResponseViewer />
      </main>
    </div>
  )
}

export default App

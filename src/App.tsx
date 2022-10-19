
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './styles/global.css'

function App() {
   return (
    <div className='w-screen h-screen bg-gray-600 min-h-screen antialiased text-gray-100' >
       <Header />
       <Tasks/>
      </div>
  )
}

export default App

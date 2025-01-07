import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/Viewpaste'
import Home from './components/Home'


const router=createBrowserRouter(
  [
    {
       path:"/",
       element:
       <div>
           <Navbar />
           <Home />
       </div>   
    },
    {
      path:"/pastes",
      element:
      <div>
         <Navbar />
         <Paste />
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
            <Navbar />
            <ViewPaste />
      </div>
    },
  ]
)

function App() {
  const [count, setCount] = useState(0)

  return (
   <div >
   <RouterProvider router={router}/>
   </div>
  )
}

export default App

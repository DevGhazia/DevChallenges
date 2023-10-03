import { useState } from 'react'
import Card from './Components/Card'
import './App.css'
import CactusImg from "./assets/cactus.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Card 
        image={CactusImg}
        type='Design'
        title="Embracing Minimalism"
        description="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
        author="Annie Spratt"      
      />
    </div>
  )
}

export default App

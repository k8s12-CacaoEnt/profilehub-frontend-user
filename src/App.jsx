import * as React from 'react';
import { useState,  lazy} from 'react';
const TopNavBar = lazy(()=>import ('./components/TopNavBar'));




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNavBar/>

   
    </>
  )
}

export default App

import React,{useState} from 'react'
import Caculator from './components/Caculator'
import InputValue from './components/InputValue'
import { Number,calculation,calculation2 } from './components/validator/validator'
const App = () => {
  
  const [value,setValue] = useState("0")
  const number = Object.assign({},Number)
  const cal = Object.assign({},calculation)
  const cal2 =Object.assign({},calculation2)
  return (
    <div>
      <InputValue value={value}/>
      <Caculator number={number} setValue={setValue} value={value} cal={cal} cal2={cal2}/>
    </div>
  )
}

export default App
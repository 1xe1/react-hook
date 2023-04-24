import {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('CRRU DEV')
  
  return (
    <div className='App'>
      <h1>Hello {name}</h1>
      <button type='button' onClick={()=>setName('Test Name')}>UpdateName</button>
      <div className='card'>
        <h2>{count}</h2>
        <button type='button' onClick={()=>setCount(count+1)}>Decrease</button>
        <button type='button' onClick={()=>setCount(count-1)}>Indrease</button>
      </div>
    </div>
  )
}

export default UseState
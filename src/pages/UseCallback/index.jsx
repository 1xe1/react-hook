import {useState,useCallback} from 'react'

const UseCallback = () => {

  const [count, setCount] = useState(0)
  const countDesplay = useCallback((strCount) =>{
    return strCount + ' ' + count
  },[count])

  return (
    <div className='App'>
      <h1>{countDesplay('count is: ')}</h1>
      <button type='button' onClick={()=>setCount(count+10)}>add</button>
    </div>
  )
}

export default UseCallback
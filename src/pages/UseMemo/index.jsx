import {useState,useMemo} from 'react'

const UseMemo = () => {

  const [inputvalue, setInputvalue] = useState('')

  const memo = useMemo(()=>{
    return <ChildComponent count={inputvalue.length} />
  },[inputvalue])

  return (
    <div>
      <input type="text" onChange={(e) => setInputvalue(e.target.value)} />
      {memo}
    </div>
  )
}

const ChildComponent = ({count}) => {
  return(
    <h1>Text length is: {count}</h1>
  )

}

export default UseMemo
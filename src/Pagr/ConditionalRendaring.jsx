import React, { useState } from 'react'

const ConditionalRendaring = () => {
  const [x, setx] = useState();
  const handleChange = ()=>{
    setx(!x)
  }
  return (
    <div>
{x ? <h1>page 1</h1>:<h1>page 2</h1>}
 
 {x && <form action='' >
      <label htmlFor='name'>name</label>
      <input type='text' /><br/>
      <label htmlFor='name'>name</label>
      <input type='text' /><br/>
      <label htmlFor='name'>name</label>
      <input type='text' />
 </form>
 }
    

      <button onClick={handleChange}>click</button>
    </div>
  )
}

export default ConditionalRendaring

import React, { useState } from 'react'
import Child1 from './child'
import { unState } from 'react'

function Parent1() {

    let [state , setSate] = useState("");

    const populateValue = (event) => {
        setSate(event.target.value);
    }
  return (
    <div>
      parent
      <input type= "text" placeholder='ENTER YOUR NAME' onChange={populateValue} />
      <Child data={state}/>
    </div>
  )
}

export default parent
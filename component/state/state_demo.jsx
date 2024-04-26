import React, { useState } from 'react'

function state_demo() {
    let[state , setState] = useState("https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png");

    const changeToAngular = () => {
        setState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png")
    }

    const changeToReact = () => {
        setState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfDf25SqIcw4UMW47QhgwjLDEd9zIiFhwU5qr_sL0eg&s")
    }
  return (
    <div className='flex flex-col items-center'>
      <img src={state} height="200px" width="200px" alt='No Image'/>
      <div className='flex flex-wrap gap-10 items-center mt-10'>
      <button 
      className='p-2 bg-yellow-500'
      onClick={changeToAngular}>ANGULAR</button>
      <button 
      className='p-2 bg-orange-500'
      onClick={changeToReact}>REACT</button>
      </div>
    </div>
  )
}

export default state_demo

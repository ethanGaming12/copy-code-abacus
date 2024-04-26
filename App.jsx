import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateDemo from './component/state/state_demo'
import Profile from './component/profile/profile'
import Parent from './component/parent'
import UserInfo from './component/useeffect/userinfo'

function App() {
 

  return (
    <>
      {/* <div className="app">
      <h2 className="text-3xl text-center font-bold text-black mb-20">React Application</h2>
      </div>
      <StateDemo/> */}
      {/* <Profile/> */}
      {/* <Parent/> */}

      <UserInfo/>
    </>
  )
}

export default App

import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/userStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>x
      <Weather temp = {20} />
      <UserStatus isAdmin={true} loggedIn={true} />
      <Greeting timeOfDay={true} />
    </div>
  )
}

export default App

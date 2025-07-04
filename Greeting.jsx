import React from 'react'

const Morning = () => <h1>Good Morning!</h1>
const Afternoon = () => <h1>Good Afternoon!</h1>

const Greeting = ({timeOfDay}) => {
  return timeOfDay ? <Morning /> : <Afternoon />
}

export default Greeting

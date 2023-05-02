import React from 'react'
import { useNavigate } from 'react-router-dom'

function Valor() {
    const navigate = useNavigate()
    const handleNavigate =()=>{
      navigate('/home')
    }
  return (
    <div>
        <header className="App-header">
        <img src={'https://valorpaytech.com/wp-content/uploads/2022/03/Valor-PayTech-Contact-Profile-Pic.png'} className="App-logo" alt="logo" />
        <p>
          Portal <code>Team</code> Training.
        </p>
        <a
          className="App-link"
          onClick={handleNavigate}
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Valor
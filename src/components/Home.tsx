import React from 'react'
import Table from './Table'
import { Link, Route, Routes } from 'react-router-dom'
import Homepage from '../react/Homepage'

function Home() {
  return (
    <>
    <div style={{height:'8vh', width:'100%', backgroundColor:'#000'}}>
      <div style={{display:'flex', justifyContent:'flex-start', alignContent:'center', paddingTop:'23px' , paddingLeft:'50px'}}>
        <Link style={{color:'#fff', marginRight:'20px'}} to='/home/react'>React</Link>
        <Link style={{color:'#fff'}} to=''>JavaScript</Link>

      </div>
    

    </div>
    <div style={{ position:'absolute', top:250, left:350}}>
        {/* <Table/> */}
        HI, Everyone 
    </div>
    
    </>
  )
}

export default Home
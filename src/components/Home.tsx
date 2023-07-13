import React from 'react'
import Table from './Table'

function Home() {
  return (
    <>
    <div style={{height:'8vh', width:'100%', backgroundColor:'#000'}}>
      <div style={{display:'flex', justifyContent:'flex-start', alignContent:'center', paddingTop:'23px' , paddingLeft:'50px'}}>
        <a style={{color:'#fff', marginRight:'20px'}} href='/home/react'>React</a>
        <a style={{color:'#fff'}} href=''>JavaScript</a>

      </div>
    

    </div>
    <div style={{ position:'absolute', top:250, left:350}}>
     
        <Table/>
    </div>
    </>
  )
}

export default Home
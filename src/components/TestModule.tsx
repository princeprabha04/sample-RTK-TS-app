import React, { FC } from 'react'

const TestModule:FC<any> = ({name,message,rollNo}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{message}</p>
        <p>{rollNo}</p>


    </div>
  )
}

export default TestModule
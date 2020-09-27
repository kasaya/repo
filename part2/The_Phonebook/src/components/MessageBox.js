import React from 'react'

const MessageBox = ({msgInfo}) =>{
    if(msgInfo.message === ''){
      return null
    }
    return (
      <div className = {msgInfo.type}>
        {msgInfo.message}
      </div>
    )
  }
export default MessageBox
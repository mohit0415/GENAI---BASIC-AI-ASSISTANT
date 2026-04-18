import React from 'react'

const Card = ({children,customStyles,bgColor}) => {
  return (
    <div>
      <div className={`${customStyles} p-2 rounded-3xl`} style={{backgroundColor:bgColor}}>
        {children}
      </div>
    </div>
  )
}

export default Card

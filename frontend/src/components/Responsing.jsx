import React from 'react'

const Responsing = ({role,content}) => {
  return (
    <div>
      <div style={{whiteSpace : 'pre-line'}} className={` flex flex-col items-start gap-3  ${role === 'user'?'bg-sky-600 max-w-3xl rounded-4xl px-8 py-3':'bg-gray-800 max-w-4xl px-6 py-3 rounded-3xl'}`}>
        <div>{role === 'user'?<p className='text-amber-400 font-semibold'>You</p>:<p className='text-purple-400 font-semibold'>AI</p>}</div>
        <p className={`${role === 'user'?'text-white italic':'text-white'} font-serif`}>{content}</p>
      </div>
    </div>
  )
}

export default Responsing

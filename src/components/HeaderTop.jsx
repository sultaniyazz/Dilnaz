import React from 'react'

const HeaderTop = ({ h1, h2, span, span2, span3 }) => {
  return (
    <div className='flex flex-col text-copyDark lg:gap-10 gap-5 py-1'>
      <div className='flex flex-col gap-2'>
        <h1 className='lg:text-4xl text-3xl font-semibold'>{h1}</h1>
        <h2 className='lg:text-2xl text-xl font-semibold'>{h2}</h2>
      </div>
      <div className='flex flex-col  lg:gap-4 gap-3 lg:text-lg'>
        <span>{span}</span>
        <span>{span2}</span>
        <span>{span3}</span>
      </div>
    </div>
  )
}

export default HeaderTop
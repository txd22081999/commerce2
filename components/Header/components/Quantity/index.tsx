import React from 'react'

interface IQuantityProps {
  amount: number
}

const Quantity = ({ amount }: IQuantityProps) => {
  return (
    <span className='w-[15px] h-[15px] bg-black rounded-full absolute top-[-6px] right-[-6px] leading-none text-white text-[10px] flex items-center justify-center shadow-[1px_1px_3px_0_rgba(0,0,0,0.3)]'>
      {amount}
    </span>
  )
}

export default Quantity

import React from 'react'

const Button = () => {
  return (
    <div className="flex  gap-8 mt-10 lg:px-56 max-sm: max-sm:flex max-sm:items-center">
      <button className='px-3 py-1 bg-red-700 text-white rounded-sm font-semibold '>Shop Now</button>
      <button className='px-3 py-1 bg-white- text-gray-600 border-2 border-gray-500 rounded-sm font-semibold'>Category</button>
    </div>
  )
}

export default Button
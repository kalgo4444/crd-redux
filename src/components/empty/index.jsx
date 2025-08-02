import React from 'react'
import { useNavigate } from 'react-router-dom'

const Empty = () => {
  const nav = useNavigate()
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Empty</h2>
      <p className="text-lg my-2">The store length === 0</p>
      <button
        onClick={() => nav('/add')}
        className="px-5 py-2 border border-gray-200 hover:border-blue-500 duration-200 rounded cursor-pointer"
      >
        Add Info
      </button>
    </div>
  )
}

export default React.memo(Empty)

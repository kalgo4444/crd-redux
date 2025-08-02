import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const nav = useNavigate()
  return (
    <section>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-md w-full px-5">
          <h2 className="text-2xl">Not Found (404)</h2>
          <p className="text-lg my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            className="w-30 h-12 rounded-2xl border-1 cursor-pointer"
            onClick={() => nav('/')}
          >
            Home
          </button>
        </div>
      </div>
    </section>
  )
}
export default React.memo(NotFound)

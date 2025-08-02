import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="w-full sticky top-0 left-0 z-10 bg-neutral-100 h-20">
      <nav className="container h-full flex items-center justify-between">
        <Link to={'/'}>
          <span className="text-4xl font-bold">LOGO.</span>
        </Link>
        <button
          onClick={() => navigate('/add')}
          className="bg-white px-5 py-2.5 border border-gray-300 hover:border-black duration-200 rounded-2xl cursor-pointer"
        >
          Add User
        </button>
      </nav>
    </header>
  )
}
export default React.memo(Header)

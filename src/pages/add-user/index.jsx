import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../redux/features/usersSlice'
const AddUser = () => {
  const focusRef = React.useRef(null)
  React.useEffect(() => {
    focusRef?.current?.focus()
  }, [])
  const nav = useNavigate()
  const dis = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.id = Date.now()
    dis(addUser(data))
    nav('/')
    e.target.reset()
  }
  return (
    <section>
      <div className="container">
        <div className="w-full h-screen flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full px-2 py-10 rounded-2xl border-2 border-gray-300"
          >
            <h3 className="mb-4 text-center text-3xl font-bold">
              Add Info User
            </h3>
            <input
              ref={focusRef}
              name="name"
              type="text"
              placeholder="Enter Name"
              required
              className="my-2 w-full h-14 text-lg indent-5 outline-0 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded duration-200"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              required
              className="my-2 w-full h-14 text-lg indent-5 outline-0 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded duration-200"
            />{' '}
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              required
              className="my-2 w-full h-14 text-lg indent-5 outline-0 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded duration-200"
            />
            <div className="flex items-center gap-5">
              <button
                className="w-1/2 h-12 border-2 border-gray-300 hover:border-blue-500 duration-200 cursor-pointer rounded"
                type="submit"
              >
                Submit
              </button>
              <button
                className="w-1/2 h-12 border-2 border-gray-300 hover:border-blue-500 duration-200 cursor-pointer rounded"
                onClick={() => nav(-1)}
                type="button"
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default React.memo(AddUser)

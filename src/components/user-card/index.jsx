import React from 'react'
import Empty from '../empty'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/features/usersSlice'
import { toast } from 'sonner'

const UserCard = ({ data }) => {
  const dis = useDispatch()
  return (
    <>
      {data.length == 0 ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((item) => (
            <div
              key={item.id}
              className="p-3 border border-gray-300 rounded-2xl shadow-2xs min-h-80"
            >
              <div className="animate-pulse">
                <div className="w-full min-h-40 bg-gray-200"></div>
              </div>
              <h3 className="text-2xl my-3 font-semibold">{item.name}</h3>
              <p>Username: {item.username}</p>
              <p>Email: {item.email}</p>
              <button
                onClick={() => {
                  dis(removeUser(item))
                  toast.warning('User is deleted')
                }}
                className="block font-semibold mt-3 ml-auto mr-0 px-2 py-1 border border-gray-300 rounded hover:border-black duration-200 cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default React.memo(UserCard)

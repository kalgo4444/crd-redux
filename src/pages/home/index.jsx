import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../../components/user-card'
import { Toaster } from 'sonner'
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const users = useSelector((state) => state.users.value)
  return (
    <section className="my-10">
      <div className="container">
        <UserCard data={users} />
        <Toaster richColors />
      </div>
    </section>
  )
}
export default React.memo(Home)

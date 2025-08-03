import React from 'react'
import { useSelector } from 'react-redux'
import { Toaster } from 'sonner'
import UsersTable from '../../components/users-table'
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const users = useSelector((state) => state.users.value)
  return (
    <section className="my-10">
      <div className="container">
        <UsersTable data={users} />
        <Toaster richColors />
      </div>
    </section>
  )
}
export default React.memo(Home)

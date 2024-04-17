import { useEffect } from 'react'
import { useTelegram } from '../hooks/useTelegram'

export const Profile = () => {
  const {user} = useTelegram()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      <img src={user?.photo_url} alt={user?.username} className='w-20 rounded-full' />
      <h2>{user?.first_name} {user?.last_name} {user?.photo_url}</h2>
      <p>{user?.username}</p>
    </div>
  )
}

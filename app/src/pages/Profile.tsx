import { useEffect } from 'react'
import { useTelegram } from '../hooks/useTelegram'

export const Profile = () => {
  const {user} = useTelegram()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>
      <p className='text-xl font-semibold'>{user?.username || 'username'}</p>
      <p className='text-tgHintColor'>
        {user?.first_name || 'firstname'}
        {user?.last_name || 'lastname'}
      </p>
    </div>
  )
}

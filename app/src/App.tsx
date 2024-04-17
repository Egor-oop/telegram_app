import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const { tg } = useTelegram()
  const navigate = useNavigate()

  useEffect(() => {
    tg.ready()
    tg.onEvent('backButtonClicked', navigate(-1))
    return tg.offEvent('backButtonClicked', navigate(-1))
  }, [])

  return (
    <>
      <div className='flex justify-between'>
        <Link className='text-tgLinkColor' to={'/profile'}>Profile</Link>
        <Link className='text-tgLinkColor' to={'/newpost'}>New post</Link>
      </div>
    </>
  )
}

export default App

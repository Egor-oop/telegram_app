import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Link } from 'react-router-dom'

function App() {
  const { tg } = useTelegram()

  useEffect(() => { tg.ready() }, [])

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

import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'
import { Link } from 'react-router-dom'

function App() {
  const { tg, onClose, user } = useTelegram()

  useEffect(() => { tg.ready() }, [])

  return (
    <>
      <h1>{user?.username}</h1>
      <button onClick={onClose}>Toggle</button><br />
      <Link to={'/telegram_app/profile'}>Profile</Link>
    </>
  )
}

export default App

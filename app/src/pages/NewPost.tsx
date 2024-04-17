import { useEffect } from "react"
import { Button } from "../components/Button"
import { useTelegram } from "../hooks/useTelegram"
import { useNavigate } from "react-router-dom"

export const NewPost = () => {
  const { tg, onBackButton } = useTelegram()
  const navigate = useNavigate()

  useEffect(() => {
    tg.onEvent('backButtonClicked', navigate(-1))
  }, [])

  return (
    <div>
      <p className='text-2xl'>New Post Page</p>
      <Button onClick={onBackButton}>Backjasdfkljlaiusdkjhf</Button>
    </div>
  )
}

import { useCallback, useEffect } from "react"
import { Button } from "../components/Button"
import { useTelegram } from "../hooks/useTelegram"
import { useNavigate } from "react-router-dom"

export const NewPost = () => {
  const { tg, onBackButton } = useTelegram()
  const navigate = useNavigate()

  const onBack = useCallback(() => {
    console.log('going back')
    navigate(-1)
  }, [])

  useEffect(() => {
    tg.onEvent('backButtonClicked', onBack)
    return () => (tg.offEvent('backButtonClicked', onBack))
  }, [onBack])


  return (
    <div>
      <p className='text-2xl'>New Post Page</p>
      <Button onClick={onBackButton}>Backjasdfkljlaiusdkjhf</Button>
    </div>
  )
}

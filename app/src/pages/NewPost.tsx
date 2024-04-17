import { Button } from "../components/Button"
import { useTelegram } from "../hooks/useTelegram"

export const NewPost = () => {
  const { onBackButton } = useTelegram()

  return (
    <div>
      <p className='text-2xl'>New Post Page</p>
      <Button onClick={onBackButton}>Backjasdfkljlaiusdkjhf</Button>
    </div>
  )
}

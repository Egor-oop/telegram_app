export const useTelegram = () => {
  // @ts-ignore
  const tg = window.Telegram.WebApp
  const user: IUser = tg.initDataUnsafe?.user

  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) tg.MainButton.hide()
    else tg.MainButton.show()
  }

  const onBackButton = () => {
    if (tg.BackButton.isVisible) tg.BackButton.hide()
    else tg.BackButton.show()
  }

  return {
    tg,
    user: user,
    onClose,
    onToggleButton,
    onBackButton
  }
}
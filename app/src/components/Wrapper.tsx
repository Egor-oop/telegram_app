import React, { FC, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { tg } = useTelegram()
  const navigate = useNavigate()

  useEffect(() => {
    tg.BackButton.show()
  }, [])

  const onBack = useCallback(() => {
    console.log('going back')
    navigate(-1)
  }, [])

  useEffect(() => {
    tg.onEvent('backButtonClicked', onBack)
    return () => (tg.offEvent('backButtonClicked', onBack))
  }, [onBack])

  return (
    <>{children}</>
  )
}

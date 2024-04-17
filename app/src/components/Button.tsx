import { FC, ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className='px-5 py-2 bg-tgBtnColor rounded-lg text-tgBtnTextColor'
      onClick={onClick}
    >{children}</button>
  )
}

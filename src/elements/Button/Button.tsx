import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...rest }, ref) => {
    return <button ref={ref} type={type} {...rest} />
  },
)

Button.displayName = 'Button'

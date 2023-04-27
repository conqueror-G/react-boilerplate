import { HTMLAttributes, forwardRef } from 'react'

type BaseProps = HTMLAttributes<HTMLParagraphElement>

export const Base = forwardRef<HTMLParagraphElement, BaseProps>((props, ref) => {
  return <p ref={ref} {...props} />
})

Base.displayName = 'Base'

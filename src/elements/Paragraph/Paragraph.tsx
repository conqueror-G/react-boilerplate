import { PropsWithChildren } from 'react'

import { Base, Head, HeadType } from './components'

interface ParagraphProps {
  type?: HeadType
  className?: string
}

export const Paragraph = ({ type, className, children }: PropsWithChildren<ParagraphProps>) => {
  if (
    type === 'h1' ||
    type === 'h2' ||
    type === 'h3' ||
    type === 'h4' ||
    type === 'h5' ||
    type === 'h6'
  ) {
    return (
      <Head variant={type} className={className}>
        {children}
      </Head>
    )
  }

  return <Base className={className}>{children}</Base>
}

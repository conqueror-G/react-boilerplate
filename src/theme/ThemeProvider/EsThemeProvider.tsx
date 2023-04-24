import { ReactNode } from 'react'

import { ThemeProvider } from '@emotion/react'

import { NormalizeCSS } from '../NormalizeCSS'

interface EsThemeProviderProps {
  children: ReactNode
}

export const EsThemeProvider = ({ children }: EsThemeProviderProps) => {
  const theme = {
    colors: {
      primary: '#0070f3',
      background: '#f5f5f5',
      text: '#333333',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <NormalizeCSS />
      {children}
    </ThemeProvider>
  )
}

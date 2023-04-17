import { Suspense } from 'react'

import Home from './pages/Home'
import { EsThemeProvider } from './theme'

export const App = () => {
  return (
    <EsThemeProvider>
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
    </EsThemeProvider>
  )
}

export default App

import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'

import { i18n } from './i18n/i18n'
import { AppRouter } from './routes'
import { EsThemeProvider } from './theme'

export const App = () => {
  return (
    <EsThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div>loading...</div>}>
          <RouterProvider router={AppRouter} />
        </Suspense>
      </I18nextProvider>
    </EsThemeProvider>
  )
}

export default App

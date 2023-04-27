import { useTranslation } from 'react-i18next'

import { Box } from 'src/elements'

export const Home = () => {
  const { t } = useTranslation()

  return <Box>{t('Home')}</Box>
}

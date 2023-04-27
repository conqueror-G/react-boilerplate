import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Paragraph } from 'src/elements'

import Background from './images/background.jpg'

export const Error = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleButtonNavigate = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 8,
          padding: 50,
          backgroundColor: '#ffffff',
          borderRadius: 8,
          boxShadow: '5px 5px 5px #e1e1e1',
        }}
      >
        <Paragraph type="h1">{t('에러_페이지_제목')}</Paragraph>
        <Paragraph>{t('에러_페이지_설명')}</Paragraph>
        <Button
          onClick={handleButtonNavigate}
          css={{
            padding: '4px 10px',
            borderRadius: 4,
            border: '1px solid #000000',
            backgroundColor: '#084C9C',
            color: '#ffffff',
          }}
        >
          {t('에러_페이지_버튼')}
        </Button>
      </Box>
    </Box>
  )
}

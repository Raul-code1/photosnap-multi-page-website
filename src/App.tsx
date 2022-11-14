import { FC } from 'react'

import { MainLayout } from './layout/MainLayout'
import { AppRouter } from './router/AppRouter'

const App:FC = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  )
}

export default App

import { StrictMode } from 'react'
import { ActivityProvider } from './activity'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './AppRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ActivityProvider>
        <AppRouter />
      </ActivityProvider>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import DashboardProvider from './Components/DashboardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </DashboardProvider>
  </StrictMode>,
)

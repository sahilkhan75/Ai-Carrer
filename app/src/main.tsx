import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const server = "http://localhost:5000"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId='179479219559-42p3fpglv85pl49d7bbue17mhuccapmi.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>,
)

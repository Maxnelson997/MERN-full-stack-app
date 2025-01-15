import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './assets/app.css'
import UserProvider from './contexts/UserContext.jsx'
import PostProvider from './contexts/PostContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </PostProvider>
  </StrictMode>,
)
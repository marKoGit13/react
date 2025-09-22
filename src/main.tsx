import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import LoginPage from './LoginPage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './LoginPage'

//dffds
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginPage/>
  </StrictMode>,
)

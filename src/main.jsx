import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Signin } from './screens/sign'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Signin />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ReactLenis, useLenis } from 'lenis/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
    <App />
    </ReactLenis>
  </StrictMode>,
)

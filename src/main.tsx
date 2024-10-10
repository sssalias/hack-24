import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from 'src/app/App'

import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { KKAuthProvider } from 'src/processes/auth'

createRoot(document.getElementById('root')!).render(
  <KKAuthProvider>
    <StrictMode>
      <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NextUIProvider>
    </StrictMode>
  </KKAuthProvider>
)

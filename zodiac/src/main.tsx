//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//Se ha comentado el modo estricto para que la app no tenga que hacer dos veces las peticiones a la api de chatgpt.
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
)

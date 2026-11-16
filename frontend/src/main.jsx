import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.css'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/UsersStorage.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

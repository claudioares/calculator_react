import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home/Index'
import GlobalStyle from './globalStyled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)

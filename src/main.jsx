import React from 'react'
import ReactDOM from 'react-dom/client'
import theme  from './styles/theme'
import GlobalStyles from './styles/global'
import { MoviePreview } from './pages/MoviePreview'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>,
)

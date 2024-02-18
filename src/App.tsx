
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/globals'
import { PostProvider } from './Contexts/PostsContext'
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <BrowserRouter>
          <PostProvider>
            <Router/>
          </PostProvider>
        </BrowserRouter>
    </ThemeProvider>
  )
}


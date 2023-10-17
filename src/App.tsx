import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Gallery } from "./components/Gallery"
import { About } from "./components/About"
import { Cards } from "./components/Cards"
import { Footer } from "./components/Footer"

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Header/>
        <Home/>
        <Gallery/>
        <About/>
        <Cards/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}
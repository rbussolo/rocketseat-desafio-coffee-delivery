import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { ShoppingContextProvider } from "./context/ShoppingContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

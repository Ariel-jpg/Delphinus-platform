import React from 'react';
import { ThemeProvider } from 'styled-components';
import Session from "./Components/Session/Containers/Session"
import { themes } from "./Components/Common/Components/Styles/GeneralStyle.json";
import { BrowserRouter } from "react-router-dom"

const theme = themes.principalTheme

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* TODO  */}
      <div className="App">
        <BrowserRouter>
          <Session />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

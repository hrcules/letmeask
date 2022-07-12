import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

import GlobalStyle from "./styles/global";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.titleTheme === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
            <Route
              path="/rooms/:id"
              element={<Room toggleTheme={toggleTheme} />}
            />

            <Route
              path="/admin/rooms/:id"
              element={<AdminRoom toggleTheme={toggleTheme} />}
            />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

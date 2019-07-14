import React from 'react';
import GlobalStyle from "./styles/GlobalStyle";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { Menu } from "./Menu";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;

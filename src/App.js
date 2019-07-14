import React from 'react';
import GlobalStyle from "./styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar />
      <Banner />
    </>
  );
}

export default App;

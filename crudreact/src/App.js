import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <Outlet />
      </div>
      <footer style={{ margin: "auto" }}><Footer /></footer>
    </>
  );
}

export default App;

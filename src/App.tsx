import React from 'react';
import './App.scss';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Saidbare from './component/saidbar/Saidbare';
import Content from './component/profile/Profile';


function App() {
  return (
    <div className="App">
      <div className="wrap__app">
        <Header />
        <Saidbare />
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

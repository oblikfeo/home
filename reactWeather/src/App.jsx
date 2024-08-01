import { Header } from "./components/Header"
import React, { useState, useEffect } from 'react';
import { WeatherNow } from "./components/WeatherNow";
import { Weather12H } from "./components/Weather12H";

function App() {

  return (
    <div>
      <Header />
      <div className="test">
      <Weather12H />
      
      </div>
      
    </div>

      
  )
}

export default App

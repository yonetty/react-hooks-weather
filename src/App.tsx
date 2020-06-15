import React, { useState } from 'react';
import { CitySelector } from './components/CitySelector';
import { Forecasts } from './components/Forecasts';

function App() {
  const [cityCode, setCityCode] = useState("");
  const handleCityChange = (cityCode: string) => {
    setCityCode(cityCode);
  }

  return (
    <div>
      <CitySelector onCityChange={handleCityChange} />
      <Forecasts cityCode={cityCode} />
    </div>
  );
}

export default App;

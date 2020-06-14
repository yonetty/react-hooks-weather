import React, { useState } from 'react';
import { CitySelector } from './components/CitySelector';
import { Forcasts } from './components/Forcasts';

function App() {
  const [cityCode, setCityCode] = useState("");
  const handleCityChange = (cityCode: string) => {
    setCityCode(cityCode);
  }

  return (
    <div>
      <CitySelector onCityChange={handleCityChange} />
      <Forcasts cityCode={cityCode} />
    </div>
  );
}

export default App;

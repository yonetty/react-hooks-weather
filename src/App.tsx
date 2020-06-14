import React from 'react';
import { Forcast } from './components/Forcast';
import { CitySelector } from './components/CitySelector';

function App() {
  const forcasts = [
    {
      dateLabel: "今日",
      telop: "雨のち曇",
      date: "2020-06-14",
      maxTemperature: "27",
      imageUrl: "http://weather.livedoor.com/img/icon/20.gif"
    },
    {
      dateLabel: "明日",
      telop: "雨のち曇",
      date: "2020-06-15",
      minTemperature: "24",
      maxTemperature: "31",
      imageUrl: "http://weather.livedoor.com/img/icon/20.gif"
    },
  ]
  return (
    <div>
      <CitySelector />
      {forcasts.map((f) => {
        return <Forcast key={f.date} {...f} />
      })}
    </div>
  );
}

export default App;

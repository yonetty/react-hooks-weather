import React, { FunctionComponent } from "react";
import { Forcast } from './Forcast';

type ForcastsProps = {
  cityCode: string;
}

export const Forcasts: FunctionComponent<ForcastsProps> = (props) => {
  //TODO cityCodeをキーにWebサービスから取得
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
    <>
      {forcasts.map((f) => {
        return <Forcast key={f.date} {...f} />
      })}
    </>
  );
}
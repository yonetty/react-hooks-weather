import React, { FunctionComponent, useState, useEffect } from "react";
import { Forcast, ForecastProps } from './Forecast';
import { Description, DescriptionProps } from './Description';

type ForecastsProps = {
  cityCode: string;
}

/* 以下のようなJSONからデータを抽出する
forecasts:[
  0:{
    dateLabel:今日
    telop:雨のち曇
    date:2020-06-14
    temperature:{
      min:null
      max:{
        celsius:27
        fahrenheit:80.6
      }
    }
    image:{
      width:50
      url:http://weather.livedoor.com/img/icon/20.gif
      title:雨のち曇
      height:31
    }
  }
  1:{
*/
const extractForcasts = (json: any) => {
  const forecasts: any[] = json.forecasts;
  return forecasts.map((f: any) => {
    return {
      dateLabel: f.dateLabel,
      telop: f.telop,
      date: f.date,
      minTemperature: f.temperature.min ? f.temperature.min.celsius : null,
      maxTemperature: f.temperature.max ? f.temperature.max.celsius : null,
      imageUrl: f.image.url,
      imageAlt: f.image.title
    };
  });
}

const extractDescription = (json: any) => {
  return {
    title: json.title,
    text: json.description.text
  };
}

const getFetchUrl = (cityCode: string) => {
  let baseUrl: string;
  if (process.env.NODE_ENV === 'production') {
    baseUrl = "http://weather.livedoor.com";
  } else {
    baseUrl = "/api";
  }
  const url = `${baseUrl}/forecast/webservice/json/v1?city=${cityCode}`;
  return url;
}

export const Forecasts: FunctionComponent<ForecastsProps> = (props) => {
  const [forcasts, setForcasts] = useState<ForecastProps[]>([]);
  const [description, setDescription] = useState<DescriptionProps>();

  useEffect(() => {
    if (props.cityCode) {
      const url = getFetchUrl(props.cityCode);
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const newForcasts: ForecastProps[] = extractForcasts(json);
          setForcasts(newForcasts);
          const newDescription: DescriptionProps = extractDescription(json);
          setDescription(newDescription);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [props.cityCode]);

  return (
    <>
      {description && <Description {...description} />}
      {forcasts.map((f) => {
        return <Forcast key={f.date} {...f} />
      })}
    </>
  );
}
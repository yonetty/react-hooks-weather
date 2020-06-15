import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import citiesJson from "./cities.json";

type City = {
  code: string;
  name: string;
}
type Prefecture = {
  name: string;
  cities: City[];
}
type Area = {
  name: string;
  prefectures: Prefecture[];
}
const areas: Area[] = citiesJson.areas;

const Wrapepr = styled.div`
  padding: 10px;
  width: 200px;
  text-align: center;
  float: left;
`

const AreaSelect = styled.select`
  height: 25px;
  width: 150px;
  margin-bottom: 10px;
`

const PrefectureSelect = styled.select`
  height: 25px;
  width: 150px;
  margin-bottom: 10px;
`

const CityList = styled.ul`
  text-align: left;
`

const CityItem = styled.li`
`

const Link = styled.a`
  &:link, :visited, :hover, :active {
    color: blue;
  }
`

type CitySelectorProps = {
  onCityChange: (cityCode: string) => void;
}

export const CitySelector: FunctionComponent<CitySelectorProps> = (props) => {
  const [selectedAreaName, setSelectedAreaName] = useState("");
  const [selectedPrefectureName, setSelectedPrefectureName] = useState("");
  const selectedArea = areas.find((area) => area.name === selectedAreaName);
  const prefectures = selectedArea ? selectedArea.prefectures : [];
  const selectedPrefecture = prefectures.find((pref) => pref.name === selectedPrefectureName);
  const cities = selectedPrefecture ? selectedPrefecture.cities : [];

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAreaName(e.target.value);
  }
  const handlePrefectureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefectureName(e.target.value);
  }

  return (
    <Wrapepr>
      <AreaSelect defaultValue={selectedAreaName} onChange={handleAreaChange}>
        <option value="">--地域を選択--</option>
        {areas.map((area) => {
          return <option key={area.name} value={area.name} >{area.name}</option>
        })}
      </AreaSelect>
      <PrefectureSelect defaultValue={selectedPrefectureName} onChange={handlePrefectureChange}>
        <option value="">--県を選択--</option>
        {prefectures.map((pref) => {
          return <option key={pref.name} value={pref.name} >{pref.name}</option>
        })}
      </PrefectureSelect>
      <CityList>
        {cities.map((city) => {
          return <CityItem key={city.code}><Link href="#" onClick={() => props.onCityChange(city.code)}>{city.name}</Link></CityItem>
        })}
      </CityList>
    </Wrapepr>
  );
}
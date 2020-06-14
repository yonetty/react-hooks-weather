import React, { FunctionComponent } from "react";
import styled from "styled-components";

type ForcastProps = {
  dateLabel: string;
  telop: string;
  date: string;
  minTemperature?: string;
  maxTemperature: string;
  imageUrl: string;
  imageAlt?: string;
}

const Wrapper = styled.div`
  width: 150px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 3px;
  font-size: 1em;
  border: solid 1px lightsteelblue;
  text-align: center;
  float: left;
`

const DateLabel = styled.div`
  font-size: 1.2em;
  line-height: 1.5em;
  margin-top: 2px;
  background-color: royalblue; 
  color: #fff;
`

const Telop = styled.div`
  line-height: 1.2em;
  margin-top: 2px;
`

const Date = styled.div`
  line-height: 1.2em;
  margin: 2px auto;
`

const Image = styled.img`
  height: 50px;
  margin: 2px auto;
`

const Temperature = styled.div`
  padding: 2px;
`

const Min = styled.span`
  font-size: 1.8em;
  line-height: 1.9em;
  color: blue;
`

const Infix = styled.span`
  font-size: 1.8em;
  line-height: 1.9em;
`

const Max = styled.span`
  font-size: 1.8em;
  line-height: 1.9em;
  color: red;
`

export const Forcast: FunctionComponent<ForcastProps> = (props) => {
  return (
    <Wrapper>
      <DateLabel>{props.dateLabel}</DateLabel>
      <Telop>{props.telop}</Telop>
      <Date>{props.date}</Date>
      <Image src={props.imageUrl} alt={props.imageAlt} />
      <Temperature>
        <Min>{props.minTemperature || "-"}</Min>
        <Infix>{"/"}</Infix>
        <Max>{props.maxTemperature}</Max>
      </Temperature>
    </Wrapper>
  );
}

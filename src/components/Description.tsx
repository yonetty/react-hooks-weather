import React, { FunctionComponent } from "react";
import styled from "styled-components";

export type DescriptionProps = {
  title: string;
  text: string;
}

const Wrapper = styled.div`
  width: 400px;
  margin-top: 10px;
  margin-right: 10px;
  padding: 3px;
  font-size: 1em;
  border: solid 1px lightsteelblue;
  text-align: center;
  float: left;
`

const Title = styled.div`
  font-size: 1.2em;
  line-height: 1.5em;
  margin-top: 2px;
  background-color: royalblue; 
  color: #fff;
`

const Text = styled.div`
  padding: 3px;
  height: 300px;
  overflow: auto;
`

export const Description: FunctionComponent<DescriptionProps> = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Wrapper>
  )
}
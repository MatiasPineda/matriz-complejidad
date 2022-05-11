import { useState } from "react";
import styled from "styled-components";
import Summary from "./Summary";

const GridContainer = styled.div`
  max-height: 40vw;
  max-width: 40vw;
`;
const Row = styled.div`
  display: flex;
`;

const YAxis = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 2rem;
  text-align: center;
`;

const XAxis = styled.div`
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
`;

const GridWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #2196f3;
  padding: 10px;
  height: 30vw;
  width: 30vw;
  min-height: 30vw;
  min-width: 30vw;
`;

const LowSection = styled.div`
  background-color: #4cf740;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

const MediumSection = styled.div`
  background-color: #f7cd40;
  border: 1px solid rgba(0, 0, 0, 0.8);
  adding: 20px;
  font-size: 30px;
  text-align: center;
`;

const HighSection = styled.div`
  background-color: #f74040;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

function ResultGrid(props) {
  const { values } = props;

  return (
    <Row>
      <GridContainer>
        <Row>
          <YAxis>Negocio</YAxis>
          <GridWrapper>
            <HighSection />
            <HighSection />
            <HighSection />
            <MediumSection />
            <MediumSection />
            <HighSection />
            <LowSection />
            <MediumSection />
            <HighSection />

            <Punto values={values} />
          </GridWrapper>
        </Row>
        <Row>
          <div />
          <XAxis>Tecnología</XAxis>
        </Row>
      </GridContainer>
      <div style={{width: "4vw", "min-width": "4vw"}} />
      <Summary values={values} />
    </Row>
  );
}

const Punto = styled.div`
  position: absolute;
  z-index: 2;
  height: 10px;
  width: 10px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
  bottom: calc(5px + (30vw * ${(props) => props.values.business} / 16));
  left: calc(5px + (30vw * ${(props) => props.values.technology} / 16));
`;

export default ResultGrid;

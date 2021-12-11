import React from "react";
import Card from "./Card";
import { Obj1, Obj2, Obj3 } from "./CardData";
import styled from "styled-components";

const CardSection = () => {
  const Div = styled.div`
    box-shadow: 5px 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
    margin-left: 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 1rem;

    &:hover {
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 768px) {
      margin-left: 0rem;
    }
  `;
  return (
    <>
      <div className="container-fluid" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                marginTop: "4rem",
                marginLeft: "2rem",
                lineHeight: "2.5rem",
                color: "#222b38",
              }}
            >
              Alles voor de perfecte
              <br /> marketingcampagne
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#222b38",
                marginLeft: "2rem",
              }}
            >
              Met een slimme combinatie van creativiteit, strategie en techniek;
              helpen wij onze ambitieuze
              <br /> opdrachtgevers te groeien. Waar wil jij de impact
              vergroten?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <Div>
              <Card Cont={Obj1} />
            </Div>
          </div>
          <div className="col-xl-4">
            <Div>
              <Card Cont={Obj2} />
            </Div>
          </div>
          <div className="col-xl-4">
            <Div>
              <Card Cont={Obj3} />
            </Div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;

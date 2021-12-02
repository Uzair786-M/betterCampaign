import React from "react";
import Card from "./Card";
import { Obj1, Obj2, Obj3 } from "./CardData";

const CardSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2.5rem",
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
            <Card Cont={Obj1} />
          </div>
          <div className="col-xl-4">
            <Card Cont={Obj2} />
          </div>
          <div className="col-xl-4">
            <Card Cont={Obj3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;

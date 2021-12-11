import React from "react";
import Button from "../Button/Button";
import styled from "styled-components";
const Campagne = () => {
  const H1 = styled.h1`
    margin-top: 8rem;
    margin-left: 3rem;
    @media (max-width: 768px) {
      margin-top: 4rem;
    }
  `;
  const IMG = styled.img`
    margin-top: 12rem;
    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  `;
  return (
    <>
      <div className="container-fluid" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
            style={{ marginBottom: "4rem" }}
          >
            <H1>
              De ultieme campagne
              <br /> blauwdruk
            </H1>
            <p
              style={{
                marginTop: "2rem",
                marginLeft: "3rem",
                fontSize: "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <div>
              <ul
                style={{
                  listStyleType: "square",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                  lineHeight: "2rem",
                  fontSize: "1.2rem",
                }}
              >
                <li>In heldere taal</li>
                <li>Die écht passen bij jou en je bedrijf</li>
                <li>Inclusief SEO (zoekmachineoptimalisatie)</li>
                <li>Met onbeperkte wijzigingsrondes</li>
              </ul>
            </div>
            <div style={{ marginLeft: "2.5rem", marginTop: "2rem" }}>
              <Button btnType="MainPageButton">
                Ontdek onze succesformule
              </Button>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
            style={{ marginBottom: "4rem" }}
          >
            <IMG
              src="Placeholder.png"
              className="img-responsive w-100"
              alt=".."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Campagne;

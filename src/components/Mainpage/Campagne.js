import React from "react";
import Button from "../Button/Button";
const Campagne = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <h1 style={{ marginTop: "8rem", marginLeft: "3rem" }}>
              De ultieme campagne
              <br /> blauwdruk
            </h1>
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
          <div className="col-xl-6">
            <img
              src="Placeholder.png"
              className="img-responsive w-100"
              alt=".."
              style={{ marginTop: "12rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Campagne;

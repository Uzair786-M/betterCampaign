import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#222b38",
          marginTop: "5rem",
          padding: "2rem",
        }}
      >
        <div className="row">
          <div
            className="col-xl-6"
            style={{ color: "white", marginTop: "4rem" }}
          >
            <h1>
              Klaar om je bedrijf naar
              <br /> de volgende stap te
              <br /> tillen?
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            <ul style={{ listStyle: "square" }}>
              <li>
                <a href="hallo@dev.bettercampaign.nl">
                  hallo@dev.bettercampaign.nl
                </a>
              </li>
              <li>
                <a href="#">Plan een vrijblijvend gesprek</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6">
            <img
              src="Placeholder.png"
              className="img-responsive w-100"
              alt=".."
              style={{ marginTop: "2rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

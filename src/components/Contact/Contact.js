import React from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
const Contact = () => {
  return (
    <>
      <Header />
      <div
        className="container-fluid text-white"
        style={{
          backgroundColor: "#222b38",
          padding: "8rem",
          position: "absolute",
        }}
      >
        <div className="row">
          <div className="col " style={{ fontFamily: "san-serif" }}>
            <h1
              className="d-flex justify-content-center"
              style={{ fontSize: "3rem", fontWeight: "bold" }}
            >
              Neem contact op.
            </h1>
            <p
              className="d-flex justify-content-center"
              style={{ fontSize: "1.2rem" }}
            >
              Ook aan de slag met een ijzersterke marketingcampagne? Neem
              contact op voor een
            </p>
            <p
              className="d-flex justify-content-center"
              style={{ fontSize: "1.2rem" }}
            >
              vrijblijvende kennismaking.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ marginTop: "20rem", marginBottom: "3rem" }}
      >
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card w-50 p-5" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="Naam"
                      aria-label="Naam"
                      aria-describedby="button-addon2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="input-group mb-3 w-100">
                    <input
                      type="text"
                      className="form-control p-2"
                      placeholder="E-mailadres"
                      aria-label="E-mailadres"
                      aria-describedby="button-addon2"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div class="input-group">
                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Je bericht"
                      aria-label="Je bericht"
                    ></textarea>
                  </div>
                </div>
                <Button btnType="ContactButton">Verzenden</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

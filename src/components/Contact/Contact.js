import React, { useEffect } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid background">
        <div className="row">
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 fontHeading"
            style={{ fontFamily: "san-serif" }}
            data-aos="fade-up"
          >
            Neem contact op.
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 fontText1"
            style={{ fontFamily: "san-serif" }}
            data-aos="fade-up"
          >
            Ook aan de slag met een ijzersterke marketingcampagne? Neem contact
            op voor een
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 fontText2"
            style={{ fontFamily: "san-serif" }}
            data-aos="fade-up"
          >
            vrijblijvende kennismaking.
          </div>
        </div>
      </div>
      <div className="container-fluid CardContainer">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
            <div className="card Card" data-aos="fade-up">
              <div className="card-body">
                <div>
                  <div className="input-group mb-3 Input">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Naam"
                      aria-label="Naam"
                      aria-describedby="button-addon2"
                      style={{ border: "none", backgroundColor: "#F2F5F7" }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="input-group mb-3 Input">
                    <input
                      type="text"
                      className="form-control "
                      placeholder="E-mailadres"
                      aria-label="E-mailadres"
                      aria-describedby="button-addon2"
                      style={{ border: "none", backgroundColor: "#F2F5F7" }}
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
                      style={{ border: "none", backgroundColor: "#F2F5F7" }}
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

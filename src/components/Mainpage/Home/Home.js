import React, { useEffect } from "react";
import Button from "../../Button/Button";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#222b38", overflowX: "hidden" }}
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
            <div className="h1 headingStyle" data-aos="fade-up">
              Laat je merk groeien <br />
              door ijzersterke <br />
              campagnes.
            </div>
            <div className="textStyle" data-aos="fade-up">
              Wij helpen je met het opzetten van onweerstaanbare & winstgevende
              <br /> marketingcampagnes.
            </div>
            <div className="p-5" data-aos="fade-up">
              <span>
                <Button btnType="MainPageButton">
                  Ontdek onze succesformule
                </Button>
              </span>
              <span>
                <button
                  type="button"
                  className="btn btn-link mx-4"
                  style={{ color: "#00fa96" }}
                >
                  Kennismaken
                </button>
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <img
              src="homeImage.png"
              className="img-responsive w-100 image"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

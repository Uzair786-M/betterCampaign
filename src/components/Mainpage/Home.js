import React from "react";
import Button from "../Button/Button";
const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#222b38" }}>
        <div className="row">
          <div className="col-xl-6 text-white">
            <div
              className="h1 text-white mx-5"
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginTop: "8rem",
              }}
            >
              Laat je merk groeien <br />
              door ijzersterke <br />
              campagnes.
            </div>
            <div
              className="text-white mx-5"
              style={{ fontSize: "1.1rem", marginTop: "2rem" }}
            >
              Wij helpen je met het opzetten van onweerstaanbare & winstgevende
              <br /> marketingcampagnes.​
            </div>
            <div className="p-5">
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
          <div className="col-xl-6">
            <img
              src="homeImage.png"
              className="img-responsive w-100"
              style={{ marginTop: "9rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

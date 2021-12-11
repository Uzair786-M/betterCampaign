import React from "react";
import { Card } from "react-bootstrap";

import Button from "../../Button/Button";

const card = (props) => {
  return (
    <>
      <div>
        <Card
          style={{
            border: "none",
            height: "60vh",
          }}
        >
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold",
                marginTop: "2rem",
                fontSize: "1.5rem",
                color: "#4B4F58",
              }}
            >
              {props.Cont.Name}
            </Card.Title>
            <Card.Text
              style={{
                marginTop: "2rem",
                fontSize: "1.4rem",
                color: "#4B4F58",
              }}
            >
              {props.Cont.content}
            </Card.Text>
            <div>
              <Button btnType="MainPageButton">ontdek meer</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default card;

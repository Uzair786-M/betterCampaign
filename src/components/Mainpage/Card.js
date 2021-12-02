import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Button from "../Button/Button";

const card = (props) => {
  const Div = styled.div`
    box-shadow: 5px 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
    margin-left: 2rem;
    margin-top: 4rem;
    padding: 1rem;
    &:hover {
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.6);
    }
  `;
  return (
    <>
      <Div>
        <Card style={{ textAlign: "justify", border: "none" }}>
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold",
                marginTop: "2rem",
                fontSize: "1.5rem",
              }}
            >
              {props.Cont.Name}
            </Card.Title>
            <Card.Text
              style={{
                marginTop: "2rem",
                fontSize: "1rem",
                height: "6rem",
              }}
            >
              {props.Cont.content}
            </Card.Text>
            <div
              style={{
                marginTop: "2rem",
              }}
            >
              <Button btnType="MainPageButton">ontdek meer</Button>
            </div>
          </Card.Body>
        </Card>
      </Div>
    </>
  );
};

export default card;

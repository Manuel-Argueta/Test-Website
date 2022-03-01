import React from "react";
import "./Problem.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import farmingImage from "../../assets/Farming.png";

function Problem() {
  return (
    <Container>
      <Row>
        <Col>
          <img id="farmingImage" src={farmingImage} />
        </Col>
        <Col>
          <h2 id="problemHeader">Solving Deforestation</h2>
          <p className="problemContent">
            The mission of our organization is to use Planet Planter to solve
            mass deforestation around the world
          </p>
          <p className="problemContent">
            The procedes from the game will support organizations to plant more
            trees around the world
          </p>
          <p className="problemContent">
            50% of revenue will go to planting trees in real life. We strive to
            mitigate the effects of deforestation in our world; our goal is to
            plant more than 1,000,000 trees around the world using revenue from
            our game
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Problem;
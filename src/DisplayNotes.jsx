import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class DisplayNotes extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {this.props.notes.map((note) => {
            return <Col sm={4}>{note}</Col>;
          })}
        </Row>
      </Container>
    );
  }
}
export default DisplayNotes;

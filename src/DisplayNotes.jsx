import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class DisplayNotes extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {this.props.notes.map((note) => {
              return note;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default DisplayNotes;

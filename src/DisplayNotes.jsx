import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import state from "./service/store";
import Note from "./Note";

class DisplayNotes extends Component {
  render() {
    let notes = state.getState();
    console.log("Jestem w display: " + notes);
    return (
      <Container fluid>
        <Row>
          {notes.map((note) => {
            return (
              <Col sm={4}>
                <Note
                  noteText={note.text}
                  noteIndex={note.index}
                  onHandleIsEdited={this.props.onHandleIsEdited}
                  onHandleEditingIndex={this.props.onHandleEditingIndex}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default DisplayNotes;

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Note from "./Note";

class DisplayNotes extends Component {
  render() {
    return (
      <Container fluid id="display_notes">
        <Row>
          {this.props.notes.map((note) => {
            return (
              <Col sm={4} className="note-wrapper">
                <Note
                  className="note"
                  noteText={note.text}
                  noteIndex={note.index}
                  onHandleIsEdited={this.props.onHandleIsEdited}
                  onHandleEditingIndex={this.props.onHandleEditingIndex}
                  deleteNote={this.props.deleteNote}
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

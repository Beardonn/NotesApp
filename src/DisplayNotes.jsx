import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Note from "./Note";

const DisplayNotes = ({
  notes,
  onHandleIsEdited,
  onHandleEditingIndex,
  deleteNote,
}) => {
  return (
    <Container fluid id="display_notes">
      <Row>
        {notes.map((note) => {
          return (
            <Col sm={4} className="note-wrapper">
              <Note
                className="note"
                noteText={note.text}
                noteIndex={note.index}
                onHandleIsEdited={onHandleIsEdited}
                onHandleEditingIndex={onHandleEditingIndex}
                deleteNote={deleteNote}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default DisplayNotes;

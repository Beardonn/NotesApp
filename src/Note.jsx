import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Note = ({
  onHandleIsEdited,
  onHandleEditingIndex,
  noteText,
  deleteNote,
  noteIndex,
}) => {
  const handleEditingIndex = () => {
    onHandleIsEdited(noteIndex);
    onHandleEditingIndex(noteIndex);
  };
  const handleDeleteNote = () => {
    deleteNote(noteIndex);
  };
  return (
    <Row className="note">
      <Col>
        <p>{noteText}</p>
      </Col>
      <Col sm={2} className="button-col">
        <Button className="note-button" onClick={handleEditingIndex}>
          Edit
        </Button>
      </Col>
      <Col sm={2} className="button-col">
        <Button className="note-button" onClick={handleDeleteNote}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
export default Note;

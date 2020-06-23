import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Input = ({
  addNote,
  handleUpdateIndex,
  editNote,
  onHandleIsEdited,
  isEdited,
  editingIndex,
  index,
}) => {
  const [text, setText] = useState("");
  const handleUpdateNoteMessage = (event) => {
    setText(event.target.value);
  };
  const handleAddNote = () => {
    addNote(text, index);
    handleUpdateIndex();
    setText("");
  };
  const handleEditedNote = () => {
    editNote(text, editingIndex);
    setText("");
    onHandleIsEdited();
  };
  const onHandleEditNote = () => {
    isEdited ? handleEditedNote() : handleAddNote();
  };
  return (
    <Container id="input_component" fluid>
      <Row>
        <Col sm={10} className="input-col">
          <textarea
            className="add-note-input"
            type="text"
            onChange={handleUpdateNoteMessage}
            value={text}
            placeholder={"Write your note here..."}
          />
        </Col>
        <Col sm={2} className="button-col">
          <Button
            size="lg"
            block
            className="add-note-button"
            onClick={onHandleEditNote}
          >
            {isEdited ? "Edit Note" : "Add Note"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Input;

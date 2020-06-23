import React, { useState } from "react";
import "./scss/App.scss";
import DisplayNotes from "./DisplayNotes";
import Input from "./Input";
import { Container } from "react-bootstrap";
import { deleteNote, addNote, editNote } from "./service/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    notes: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text, index) => dispatch(addNote(text, index)),
    editNote: (text, index) => dispatch(editNote(text, index)),
    deleteNote: (index) => dispatch(deleteNote(index)),
  };
};
const App = ({ addNote, editNote, deleteNote, notes }) => {
  const [index, setIndex] = useState(0);
  const [isEdited, setIsEdited] = useState(false);
  const [editingIndex, setEditingIndex] = useState("");
  const handleUpdateIndex = () => {
    setIndex(index + 1);
  };
  const handleIsEdited = (noteIndex) => {
    if (noteIndex === editingIndex) {
      return;
    }
    setIsEdited(!isEdited);
  };
  const handleEditingIndex = (index) => {
    if (editingIndex === index) {
      return;
    }
    setEditingIndex(index);
  };
  return (
    <Container id="main_component" fluid>
      <Input
        handleUpdateIndex={handleUpdateIndex}
        onHandleIsEdited={handleIsEdited}
        index={index}
        isEdited={isEdited}
        editingIndex={editingIndex}
        addNote={addNote}
        editNote={editNote}
      />
      <DisplayNotes
        notes={notes}
        onHandleIsEdited={handleIsEdited}
        onHandleEditingIndex={handleEditingIndex}
        deleteNote={deleteNote}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

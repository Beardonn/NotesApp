import React, { Component } from "react";
import "./scss/App.scss";
import DisplayNotes from "./DisplayNotes";
import Note from "./Note";
import Input from "./Input";
import store from "./service/store";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      text: "",
      index: 0,
      isEdited: false,
      editingIndex: "",
    };
    this.handleAddText = this.handleAddText.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleEditedNote = this.handleEditedNote.bind(this);
    this.handleIsEdited = this.handleIsEdited.bind(this);
    this.handleEditingIndex = this.handleEditingIndex.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    console.log(store.getState());
  }
  handleAddNote() {
    if (this.state.text) {
      console.log("Index przed: " + this.state.index);
      this.setState(
        (prevState) => ({
          notes: [
            ...prevState.notes,
            <Note
              noteText={this.state.text}
              key={this.state.text}
              isEdited={this.state.isEdited}
              onHandleEditedNote={this.handleEditedNote}
              onHandleIsEdited={this.handleIsEdited}
              onHandleEditingIndex={this.handleEditingIndex}
              onHandleDeleteNote={this.handleDeleteNote}
              onHandleAddText={this.handleAddText}
              noteIndex={this.state.index}
            />,
          ],
          index: this.state.index + 1,
        }),
        () => {
          this.setState({ text: "" });
        }
      );
    }
  }
  handleDeleteNote(noteIndex) {
    this.setState(
      (prevState) => ({
        notes: prevState.notes.map((note, index) => {
          return noteIndex !== index ? note : undefined;
        }),
      }),
      () => {
        this.setState({
          isEdited: false,
          text: "",
        });
      }
    );
  }
  handleAddText(getText) {
    this.setState({
      text: getText,
    });
  }
  handleIsEdited(noteIndex) {
    if (noteIndex === this.state.editingIndex) {
      return;
    }
    this.setState({
      isEdited: !this.state.isEdited,
    });
  }
  handleEditingIndex(index) {
    this.setState({
      editingIndex: index,
    });
  }
  handleEditedNote(noteIndex) {
    this.setState(
      (prevState) => ({
        notes: prevState.notes.map((note, index) => {
          return noteIndex === index ? (
            <Note
              noteText={this.state.text}
              key={this.state.text}
              isEdited={false}
              noteIndex={noteIndex}
              onHandleEditedNote={this.handleEditedNote}
              onHandleIsEdited={this.handleIsEdited}
              onHandleEditingIndex={this.handleEditingIndex}
              onHandleDeleteNote={this.handleDeleteNote}
              onHandleAddText={this.handleAddText}
            />
          ) : (
            note
          );
        }),
      }),
      () => {
        this.setState({
          editingIndex: "",
          isEdited: false,
          text: "",
        });
      }
    );
  }
  render() {
    return (
      <Container id="main_component" fluid>
        <Input
          handleAddNote={this.handleAddNote}
          handleAddText={this.handleAddText}
          handleEditedNote={this.handleEditedNote}
          value={this.state.text}
          isEdited={this.state.isEdited}
          editingIndex={this.state.editingIndex}
        />
        <DisplayNotes
          notes={this.state.notes}
          handleEditedNote={this.handleEditedNote}
        />
      </Container>
    );
  }
}

export default App;

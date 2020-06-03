import React, { Component } from "react";
import "./scss/App.scss";
import DisplayNotes from "./DisplayNotes";
import Input from "./Input";
import store from "./service/store";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      index: 0,
      isEdited: false,
      editingIndex: "",
    };
    this.handleIsEdited = this.handleIsEdited.bind(this);
    this.handleEditingIndex = this.handleEditingIndex.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleUpdateIndex = this.handleUpdateIndex.bind(this);
    console.log(store.getState());
  }
  handleUpdateIndex() {
    this.setState({
      index: this.state.index + 1,
    });
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
  render() {
    return (
      <Container id="main_component" fluid>
        <Input
          handleUpdateIndex={this.handleUpdateIndex}
          onHandleIsEdited={this.handleIsEdited}
          index={this.state.index}
          isEdited={this.state.isEdited}
          editingIndex={this.state.editingIndex}
        />
        <DisplayNotes
          notes={this.state.notes}
          onHandleIsEdited={this.handleIsEdited}
          onHandleEditingIndex={this.handleEditingIndex}
        />
      </Container>
    );
  }
}

export default App;

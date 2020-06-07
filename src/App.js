import React, { Component } from "react";
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isEdited: false,
      editingIndex: "",
    };
    this.handleIsEdited = this.handleIsEdited.bind(this);
    this.handleEditingIndex = this.handleEditingIndex.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleUpdateIndex = this.handleUpdateIndex.bind(this);
  }
  handleUpdateIndex() {
    this.setState({
      index: this.state.index + 1,
    });
  }
  handleDeleteNote(noteIndex) {
    this.props.deleteNote(noteIndex);
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
    if (this.state.editingIndex === index) {
      return;
    }
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
          addNote={this.props.addNote}
          editNote={this.props.editNote}
        />
        <DisplayNotes
          notes={this.props.notes}
          onHandleIsEdited={this.handleIsEdited}
          onHandleEditingIndex={this.handleEditingIndex}
          deleteNote={this.props.deleteNote}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

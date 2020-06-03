import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import store from "./service/store";
import { addNote } from "./service/actions";
import { editNote } from "./service/actions";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleUpdateNoteMessage = this.handleUpdateNoteMessage.bind(this);
    this.onHandleEditNote = this.onHandleEditNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleEditedNote = this.handleEditedNote.bind(this);
  }
  handleUpdateNoteMessage(event) {
    // this.props.handleAddText(event.target.value);
    this.setState(
      {
        text: event.target.value,
      },
      () => {
        console.log("UPDATE: " + this.state.text);
      }
    );
  }
  handleAddNote() {
    store.dispatch(addNote(this.state.text, this.props.index));
    this.props.handleUpdateIndex();
  }
  handleEditedNote() {
    store.dispatch(editNote(this.state.text, this.props.editingIndex));
    this.setState({ text: "" });
    console.log(this.props.isEdited);
    this.props.onHandleIsEdited();
    console.log(this.props.isEdited);
    console.log(store.getState());
  }
  onHandleEditNote() {
    this.props.isEdited ? this.handleEditedNote() : this.handleAddNote();
  }
  render() {
    return (
      <Container id="input_component" fluid>
        <Row>
          <Col sm={10} className="input-col">
            <input
              className="add-note-input"
              type="text"
              onChange={this.handleUpdateNoteMessage}
              value={this.state.text}
            />
          </Col>
          <Col sm={2} className="button-col">
            <Button
              size="lg"
              block
              className="add-note-button"
              onClick={this.onHandleEditNote}
            >
              {this.props.isEdited ? "Edit Note" : "Add Note"}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Input;

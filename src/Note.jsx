import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

class Note extends Component {
  constructor(props) {
    super(props);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleEditingIndex = this.handleEditingIndex.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }
  handleEditButton() {
    this.props.onHandleEditedNote(this.props.noteIndex);
  }
  handleEditingIndex() {
    this.props.onHandleIsEdited(this.props.noteIndex);
    this.props.onHandleEditingIndex(this.props.noteIndex);
  }
  handleDeleteNote() {
    this.props.deleteNote(this.props.noteIndex);
  }
  render() {
    return (
      <Row className="note">
        <Col>
          <p>{this.props.noteText}</p>
        </Col>
        <Col sm={2} className="button-col">
          <Button onClick={this.handleEditingIndex}>Edit</Button>
        </Col>
        <Col sm={2} className="button-col">
          <Button className="note-button" onClick={this.handleDeleteNote}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  }
}
export default Note;

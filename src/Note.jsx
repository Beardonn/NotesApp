import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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
    this.props.onHandleAddText(this.props.noteText);
  }
  handleDeleteNote() {
    this.props.onHandleDeleteNote(this.props.noteIndex);
  }
  render() {
    return (
      <Row>
        <Col>
          <p>{this.props.noteText}</p>
        </Col>
        <Col sm={2}>
          <Button onClick={this.handleEditingIndex}>Edit</Button>
        </Col>
        <Col sm={2}>
          <Button onClick={this.handleDeleteNote}>Delete</Button>
        </Col>
      </Row>
    );
  }
}
export default Note;

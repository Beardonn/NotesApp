import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.handleUpdateNoteMessage = this.handleUpdateNoteMessage.bind(this);
    this.onHandleEditNote = this.onHandleEditNote.bind(this);
  }
  handleUpdateNoteMessage(event) {
    this.props.handleAddText(event.target.value);
    console.log("Input: " + event.target.value);
  }
  onHandleEditNote() {
    this.props.isEdited
      ? this.props.handleEditedNote(this.props.editingIndex)
      : this.props.handleAddNote();
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
              value={this.props.value}
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

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export function addNote(text) {
  return {
    type: ADD_NOTE,
    text,
  };
}

export function editNote(index, text) {
  return {
    type: EDIT_NOTE,
    index,
    text,
  };
}
export function deleteNote(index) {
  return {
    type: DELETE_NOTE,
    index,
  };
}

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const GET_NOTE = "GET_NOTE";

export function addNote(text, index) {
  return {
    type: ADD_NOTE,
    text,
    index,
  };
}

export function editNote(text, index) {
  return {
    type: EDIT_NOTE,
    text,
    index,
  };
}
export function deleteNote(index) {
  return {
    type: DELETE_NOTE,
    index,
  };
}

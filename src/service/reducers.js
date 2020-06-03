import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "./actions";

function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          text: action.text,
          index: action.index,
        },
      ];
    case EDIT_NOTE:
      return state.map((note) => {
        if (note.index === action.index) {
          return Object.assign({}, note, {
            text: action.text,
          });
        }
        return note;
      });
    case DELETE_NOTE:
      return state.map((note) => {
        if (note.index !== action.index) {
          return note;
        }
      });
    default:
      return state;
  }
}

export default notes;

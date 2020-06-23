import React, { createContext, useReducer, useCallback } from "react";
import reducers from "./service/reducers";

const NoteContext = () => {
  const [notes, dispatch] = useReducer(reducers);
  const contex = createContext();
};
export default NoteContext;

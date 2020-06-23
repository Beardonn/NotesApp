export const getNoteText = (store, id) => {
  // store.filter((note) => {
  //   return note.id === id;
  // });
  store.map((note) => {
    if (note.id === id) {
      return note.text;
    }
  });
};

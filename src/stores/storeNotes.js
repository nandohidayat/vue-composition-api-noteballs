import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => ({
    notes: [
      {
        id: "id1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores dolorum fugit magni, saepe sapiente sunt ullam. Consectetur consequatur debitis ipsum, nihil similique ullam voluptatibus. Itaque nostrum possimus repudiandae voluptatum?",
      },
      {
        id: "id2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
    ],
  }),
  actions: {
    addNote(newNoteContent) {
      this.notes.unshift({
        id: new Date().getTime().toString(),
        content: newNoteContent,
      });
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      this.notes = this.notes.map((note) => {
        if (note.id === id) {
          note.content = content;
        }
        return note;
      });
    },
  },
  getters: {
    getNoteContent: (state) => (id) =>
      state.notes.find((note) => note.id === id).content,
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) =>
      state.notes.reduce((total, note) => total + note.content.length, 0),
  },
});

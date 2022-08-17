<template>
  <div class="notes">
    <add-edit-note
      ref="addEditNoteRef"
      v-model="newNote"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          :disabled="!newNote"
          class="button is-link has-background-success"
          @click="addNote"
        >
          Add New Note
        </button>
      </template>
    </add-edit-note>
    <card-note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
    ></card-note>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharaters } from "@/use/useWatchCharaters";
import CardNote from "@/components/notes/CardNote.vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";

const storeNotes = useStoreNotes();
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

useWatchCharaters(newNote);
</script>

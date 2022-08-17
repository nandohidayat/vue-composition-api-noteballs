<template>
  <div class="edit-note">
    <add-edit-note
      ref="addEditNoteRef"
      v-model="noteContent"
      bg-color="link"
      label="Edit Note"
      placeholder="Edit Note"
    >
      <template #buttons>
        <button class="button is-link is-light" @click="$router.back()">
          Cancel
        </button>
        <button
          :disabled="!noteContent"
          class="button is-link has-background-link"
          @click="handleSaveClicked"
        >
          Update Note
        </button>
      </template>
    </add-edit-note>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const route = useRoute();
const router = useRouter();
const storeNotes = useStoreNotes();
const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>

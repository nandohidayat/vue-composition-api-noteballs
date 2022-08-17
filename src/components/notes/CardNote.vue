<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/edit-note/${note.id}`" class="card-footer-item"
        >Edit
      </router-link>
      <a
        class="card-footer-item"
        href="#"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <modal-delete-note
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    ></modal-delete-note>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import ModalDeleteNote from "@/components/notes/ModalDeleteNote.vue";

const props = defineProps({
  note: {
    type: Object,
    default: () => ({
      id: "id1",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }),
  },
});

const modals = reactive({
  deleteNote: false,
});

const characterLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button aria-label="close" class="delete" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    default: "",
  },
});

const storeNotes = useStoreNotes();
const modalCardRef = ref(null);
const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  window.removeEventListener("keyup", handleKeyboard);
});
</script>

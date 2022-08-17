<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stats</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      v-autofocus
      class="input"
      placeholder="Do you love noteballs??"
      type="text"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharaters } from "@/use/useWatchCharaters";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
const loveNoteballs = ref("");

useWatchCharaters(loveNoteballs, 50);
</script>

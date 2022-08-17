<template>
  <div :class="`has-background-${bgColor}-dark`" class="card p-4 mb-5">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          ref="textareaRef"
          v-autofocus
          :placeholder="placeholder"
          :value="modelValue"
          class="textarea"
          maxlength="100"
          @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
    default: "",
  },
});

const textareaRef = ref(null);

defineEmits(["update:modelValue"]);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>

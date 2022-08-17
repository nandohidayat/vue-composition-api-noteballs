import { watch } from "vue";

export const useWatchCharaters = (valueToWatch, maxChars = 100) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars)
      alert(`Only ${maxChars} charaters is allowed!`);
  });
};

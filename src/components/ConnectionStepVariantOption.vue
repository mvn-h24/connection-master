<template>
  <label :class="{ 'read-only': readonly }">
    <input
      type="checkbox"
      :readonly="readonly"
      ref="checkBox"
      @change="boxChanged"
    />
    <span>{{ title }}</span>
  </label>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";

interface OptionProps {
  title: string;
  price: number;
  readonly?: boolean;
}
const props = withDefaults(defineProps<OptionProps>(), { readonly: false });
const { title, price, readonly } = toRefs<OptionProps>(props);

const checkBox = ref<HTMLInputElement | null>(null);
interface OptionToggleData {
  add: boolean;
  optionPrice: number;
}
type CheckBoxEmits = {
  (e: "toggled", dto: OptionToggleData): void;
};
const emit = defineEmits<CheckBoxEmits>();
const boxChanged = () => {
  if (checkBox.value !== null) {
    emit("toggled", {
      add: checkBox.value.checked,
      optionPrice: price.value,
    });
  }
};
</script>

<style scoped>
label {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
label:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 100%;
  background-color: #cccccc;
  opacity: 0.5;
  transition: 0.2s ease-in-out;
}
label.read-only {
  pointer-events: none;
}
label.read-only:before {
  right: 0;
}
label:hover {
  border: 1px solid #61cc5b;
}
label span {
  width: 100%;
  text-align: center;
}
</style>

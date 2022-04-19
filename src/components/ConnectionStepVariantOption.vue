<template>
  <label :class="{ 'read-only': readonly }">
    <input type="checkbox" :readonly="readonly" />
    <span>{{ title }}</span>
  </label>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface OptionProps {
  title: string;
  price: number;
  readonly?: boolean;
}
const props = withDefaults(defineProps<OptionProps>(), { readonly: false });
const { title, price, readonly } = toRefs<OptionProps>(props);
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
}
label.read-only {
}
label:hover {
  border: 1px solid #61cc5b;
}
label span {
  width: 100%;
  text-align: center;
}
</style>

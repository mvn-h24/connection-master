<template>
  <button :class="{ active: activated }" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

interface ButtonProps {
  activated: boolean;
}
const props = defineProps<ButtonProps>();
const { activated } = toRefs<ButtonProps>(props);
</script>

<style scoped>
button {
  background: #98abba;
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s linear;
}
button:hover,
button.active {
  background: #61cc5b;
}
</style>

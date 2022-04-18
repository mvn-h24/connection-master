<template>
  <div class="variant">
    <h3>{{ title }}</h3>
    <p v-if="description">
      {{ description }}
    </p>
    <span class="price">{{ price_default }}</span>
    <select v-if="options.length">
      <option v-for="(option, index) in options" :key="index">
        {{ option.title }}
      </option>
    </select>
    <button>{{ selected ? "Выбрано" : "Выбрать" }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ConnectionStepVariantOption } from "@/types/connection-step-variant-option";

export default defineComponent({
  props: {
    selected: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    color: String,
    price_default: {
      type: Number as PropType<number>,
      required: true,
    },
    options: {
      type: Array as PropType<Array<ConnectionStepVariantOption>>,
      default: () => [],
    },
    select: {
      type: Array as PropType<Array<ConnectionStepVariantOption>>,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.variant {
  border: 1px solid black;
}
</style>

<template>
  <div :class="['step-variant__select', { 'read-only': readonly }]">
    <span class="title">{{ title }}</span>
    <div class="select-wrapper">
      <select @change="optionSelected">
        <option selected>Выберите вариант</option>
        <option v-for="(item, index) in items" :value="index" :key="index">
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { ConnectionStepVariantSelectItem } from "@/types/connection-step-variant-select-item";

export default defineComponent({
  setup() {
    const selectedOption: Ref<number | undefined> = ref(undefined);
    return {
      selectedOption,
    };
  },
  props: {
    items: {
      type: Array as PropType<Array<ConnectionStepVariantSelectItem>>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    readonly: Boolean,
  },
  methods: {
    optionSelected(e: Event) {
      const selectedValue = parseInt((e.target as HTMLSelectElement).value);
      if (isNaN(selectedValue)) {
        this.selectedOption = undefined;
      } else {
        this.selectedOption = selectedValue;
      }
    },
  },
  watch: {
    selectedOption(currentOption, prevOption) {
      const currentPrice = currentOption ? this.items[currentOption].price : 0;
      const prevPrice = prevOption ? this.items[prevOption].price : 0;
      this.$emit("selectSelected", {
        currentOption,
        currentPrice,
        prevOption,
        prevPrice,
      });
    },
  },
});
</script>

<style scoped>
.title {
  display: block;
  font-size: 12px;
  line-height: 1;
  margin-bottom: 5px;
}
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  background: white;
}
select:focus {
  outline: none;
}
.select-wrapper {
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.select-wrapper:before {
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
.step-variant__select.read-only select {
  pointer-events: none;
}
.step-variant__select.read-only .select-wrapper:before {
  right: 0;
}
</style>

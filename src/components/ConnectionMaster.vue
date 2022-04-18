<template>
  <div>
    <h1>Заявка на подключение к интернету</h1>
    <ConnectionStep
      v-for="(step, index) in steps"
      :key="index"
      :opened="currentStep === index"
      :title="step.title"
      :variants="step.variants"
    />
    <p class="summary" v-if="summaryPrice !== undefined">
      <span>Итого</span>
      <span>{{ summaryPrice }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { ConnectionStep as ConnectionStepType } from "@/types/connection-step";
import ConnectionStep from "@/components/ConnectionStep.vue";

export default defineComponent({
  setup() {
    const summaryPrice: Ref<number | undefined> = ref(undefined);
    const currentStep: Ref<number> = ref(0);
    return { summaryPrice, currentStep };
  },
  components: {
    ConnectionStep,
  },
  props: {
    steps: {
      type: Array as PropType<Array<ConnectionStepType>>,
      default: () => [],
    },
  },
});
</script>

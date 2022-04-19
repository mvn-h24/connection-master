<template>
  <div class="master">
    <h1>Заявка на подключение к интернету</h1>
    <ConnectionStep
      v-for="(step, index) in steps"
      :key="index"
      :opened="currentStep === index"
      :title="step.title"
      :variants="step.variants"
      @variantSelected="variantSelectedHandler"
    />
    <p class="summary" v-if="summaryPrice !== undefined">
      <span class="title">Итого к оплате</span>
      <span class="price">{{ summaryPrice }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";
import { ConnectionStep as IConnectionStep } from "@/types/connection-step";
import ConnectionStep from "@/components/ConnectionStep.vue";
import { getModule } from "vuex-module-decorators";
import { ConnectionMasterStore } from "@/store/connection-master.store";

export default defineComponent({
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const store = getModule(ConnectionMasterStore);
    const summaryPrice: Ref<number | undefined> = ref(undefined);
    const currentStep: Ref<number> = ref(0);
    return { summaryPrice, currentStep };
  },
  components: {
    ConnectionStep,
  },
  props: {
    steps: {
      type: Array as PropType<Array<IConnectionStep>>,
      default: () => [],
    },
  },
  methods: {
    variantSelectedHandler(resPrice: number) {
      this.summaryPrice = this.summaryPrice
        ? this.summaryPrice + resPrice
        : resPrice;
      this.currentStep++;
    },
  },
});
</script>
<style scoped>
h1 {
  margin-bottom: 20px;
}
.master {
  max-width: 778px;
  padding: 13px;
}
.summary {
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  padding: 20px;
  background-color: #61cc5b;
  border-radius: 10px;
  color: #ffffff;
}
.summary .title {
  text-transform: uppercase;
  font-weight: bold;
}
.summary .price {
  font-weight: lighter;
}
.summary .price:after {
  content: "\20BD";
  padding: 0 0 0 5px;
}
</style>

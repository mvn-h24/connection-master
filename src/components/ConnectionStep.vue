<template>
  <article :class="{ closed: !opened }">
    <h2>{{ title }}</h2>
    <div class="variants-list" v-show="opened">
      <ConnectionStepVariant
        v-for="(variant, index) in variants"
        :title="variant.title"
        :description="variant.description"
        :color="variant.color"
        :price_default="variant.price_default"
        :options="variant.options"
        :select="variant.select"
        :key="index"
      />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ConnectionStepVariant as IConnectionStepVariant } from "@/types/connection-step-variant";
import ConnectionStepVariant from "@/components/ConnectionStepVariant.vue";

export default defineComponent({
  components: { ConnectionStepVariant },
  props: {
    opened: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    variants: {
      type: Array as PropType<Array<IConnectionStepVariant>>,
      required: true,
    },
  },
});
</script>

<style scoped>
article {
  padding: 15px 0;
  border-top: 2px solid #dddddd;
}
h2 {
  padding-bottom: 15px;
}
.variants-list :deep(div:not(:first-child)) {
  margin-top: 15px;
}
</style>

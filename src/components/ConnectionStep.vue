<template>
  <article :class="{ closed: !opened }">
    <h2>{{ title }}</h2>
    <div v-show="opened">
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
import { ConnectionStepVariant as ConnectionStepVariantType } from "@/types/connection-step-variant";
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
      type: Array as PropType<Array<ConnectionStepVariantType>>,
      required: true,
    },
  },
});
</script>

<style scoped>
article {
}
</style>

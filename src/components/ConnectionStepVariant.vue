<template>
  <div class="variant">
    <div class="variant__title">
      <h3>{{ title }}</h3>
      <span class="price">{{ resPrice }}</span>
    </div>
    <div class="variant__info">
      <p v-if="htmlDesc" v-html="htmlDesc"></p>
      <div class="variant__info__config">
        <div v-if="options.length" class="variant__info__config__options-list">
          <ConnectionStepVariantOption
            v-for="(option, index) in options"
            :key="index"
            :readonly="selected"
            :title="option.title"
            :price="option.price"
            @toggled="optionToggled(index, $event)"
          />
        </div>
        <SkyButton :activated="selected" @click="variantSelected">{{
          selected ? "Выбрано" : "Выбрать"
        }}</SkyButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import ConnectionStepVariantOption from "@/components/ConnectionStepVariantOption.vue";
import { ConnectionStepVariantOption as IConnectionStepVariantOption } from "@/types/connection-step-variant-option";
import SkyButton from "@/components/SkyButton.vue";

export default defineComponent({
  components: { SkyButton, ConnectionStepVariantOption },
  setup(props) {
    const resPrice = ref(props.price_default);
    return { resPrice };
  },
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
      type: Array as PropType<Array<IConnectionStepVariantOption>>,
      default: () => [],
    },
    select: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    htmlDesc(): string | undefined {
      return this.description?.replace(/\n/g, "<br/><br/>");
    },
  },
  methods: {
    variantSelected(): void {
      this.$emit("selected");
    },
    optionToggled(
      index: number,
      dto: {
        add: boolean;
        optionPrice: number;
      }
    ): void {
      if (dto.add) {
        this.resPrice += dto.optionPrice;
      } else {
        this.resPrice -= dto.optionPrice;
      }
    },
  },
});
</script>

<style scoped>
.variant {
  border-left: 6px solid #cccccc;
  border-radius: 6px;
  padding: 20px 15px;
  background-color: #f8f8f8;
}
.variant__title,
.variant__info {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.price:after {
  content: "\20BD";
  padding: 0 0 0 5px;
}
.variant__info p {
  width: 70%;
}
.variant__info__config,
.variant__info__config__options-list {
  display: flex;
  flex-direction: column;
}
.variant__info__config {
  width: 30%;
}
.variant__info__config__options-list {
  width: 100%;
  margin-bottom: 10px;
}
.variant__info__config__options-list :deep(label:not(:first-child)) {
  margin-top: 10px;
}
</style>

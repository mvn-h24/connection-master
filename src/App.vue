<template>
  <ConnectionMaster :steps="steps" />
</template>

<script setup lang="ts">
import ConnectionMaster from "@/components/ConnectionMaster.vue";
import { useConnectionMasterSteps } from "@/composable/useConnectionMasterSteps";

const steps = useConnectionMasterSteps();
</script>

<!--suppress CssUnusedSymbol -->
<style>
html,
body,
#app {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
  font-family: Arial, sans-serif;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

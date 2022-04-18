import { ref, Ref } from "vue";
import { ConnectionStep } from "@/types/connection-step";

export function useConnectionMasterSteps(): Ref<Array<ConnectionStep>> {
  const DataResourceUrl = "/data.json";
  const ConnectionMasterData: Ref<Array<ConnectionStep>> = ref([]);
  fetch(DataResourceUrl)
    .then((response) => response.json())
    .then((data) => {
      ConnectionMasterData.value = data;
    });
  return ConnectionMasterData;
}

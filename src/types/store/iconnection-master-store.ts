import { IConnectionStepStore } from "@/types/store/iconnection-step-store";

export interface IConnectionMasterStore {
  steps: Array<IConnectionStepStore>;
}

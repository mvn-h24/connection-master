import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { IConnectionStepStore } from "@/types/store/iconnection-step-store";
import { IConnectionMasterStore } from "@/types/store/iconnection-master-store";
import { ConnectionStepVariant } from "@/types/connection-step-variant";
import store from "@/store/index";

@Module({ dynamic: true, store, name: "ConnectionMasterStore" })
export class ConnectionMasterStore
  extends VuexModule
  implements IConnectionMasterStore
{
  steps: Array<IConnectionStepStore> = [];

  @Mutation
  addStep(step: IConnectionStepStore) {
    const steps = this.steps;
    steps.push(step);
    this.steps = steps;
  }
  @Mutation
  updateStep(step: number, stepSrc: IConnectionStepStore) {
    this.steps[step] = stepSrc;
  }
  @Mutation
  updateStepVariant(step: number, variantSrc: ConnectionStepVariant) {
    this.steps[step].variant = variantSrc;
  }

  get summaryPrice(): number {
    let price = 0;
    for (const step of this.steps) {
      price += step.variant.price_default;
      for (const option of step.variant.options) {
        price += option.price;
      }
    }
    return price;
  }
}

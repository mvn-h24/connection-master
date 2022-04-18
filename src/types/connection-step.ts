import { ConnectionStepVariant } from "./connection-step-variant";

export interface ConnectionStep {
  title: string;
  variants: Array<ConnectionStepVariant>;
}

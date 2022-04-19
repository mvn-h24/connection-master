import { ConnectionStepVariantOption } from "./connection-step-variant-option";

export interface ConnectionStepVariant {
  title: string;
  description: string;
  color: string;
  price_default: number;
  options: Array<ConnectionStepVariantOption>;
  // select: Array<ConnectionStepVariantOption>;
}

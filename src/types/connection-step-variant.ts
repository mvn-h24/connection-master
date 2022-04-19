import { ConnectionStepVariantOption } from "./connection-step-variant-option";
import { ConnectionStepVariantSelect } from "@/types/connection-step-variant-select";

export interface ConnectionStepVariant {
  title: string;
  description: string;
  color: string;
  price_default: number;
  options: Array<ConnectionStepVariantOption>;
  select: Array<ConnectionStepVariantSelect>;
}

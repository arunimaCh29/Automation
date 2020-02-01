import { Field } from "./field";

export interface BotConfiguration {
  name: string;
  path: string;
  fields: Field[];
}

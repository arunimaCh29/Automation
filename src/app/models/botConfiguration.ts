import { Field } from "./field";

export interface BotConfiguration {
  name: string;
  botQueueID: number;
  fields: Field[];
}

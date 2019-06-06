import { Byte } from "./types";
import { Decimal, ToBinary } from "./05-to-bin";

export type ToDecimal<T extends Byte | "overflow"> = ({
  [K in Decimal]: ToBinary<K> extends T ? K : never
})[Decimal];

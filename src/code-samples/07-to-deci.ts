import { Byte } from "./types";
import { Decimal, ToBinary } from "./05-to-bin";

type DecimalMap = {
  [K in Decimal]: {
    k1: ToBinary<K>[0];
    k2: ToBinary<K>[1];
    k3: ToBinary<K>[2];
    k4: ToBinary<K>[3];
    decimal: K;
  }
};

type DecimalMapFiltered<T extends Byte | "overflow"> = T extends "overflow"
  ? "overflow"
  : ({
      [K in keyof DecimalMap]: DecimalMap[K] extends {
        k1: T[0];
        k2: T[1];
        k3: T[2];
        k4: T[3];
      }
        ? DecimalMap[K]["decimal"]
        : never
    });

export type ToDecimal<T extends Byte | "overflow"> = T extends "overflow"
  ? "overflow"
  : (DecimalMapFiltered<T>[keyof DecimalMapFiltered<T>]);

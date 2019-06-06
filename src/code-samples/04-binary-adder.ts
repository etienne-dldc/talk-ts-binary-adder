import { Byte } from "./types";
import { Carry, Sum } from "./03-sum-carry";

// prettier-ignore
export type AddBinary<A extends Byte, B extends Byte> = (
  Carry<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], 0>>>> extends 1
  ? "overflow"
  : ([
      // bit 3
      Sum<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], 0>>>>,
      // bit 2
      Sum<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], 0>>>,
      // bit 1
      Sum<A[2], B[2], Carry<A[3], B[3], 0>>,
      // bit 0
      Sum<A[3], B[3], 0>
    ])
);

// prettier-ignore
type Result = AddBinary<[0, 1, 1, 1], [0, 0, 1, 0]>;

import { Bit } from "./types";

export type And<
  A extends Bit,
  B extends Bit
> = B extends 1 ? (A extends 1 ? 1 : 0) : 0;

export type Or<
  A extends Bit,
  B extends Bit
> = B extends 0 ? (A extends 0 ? 0 : 1) : 1;

export type Xor<
  A extends Bit,
  B extends Bit
> = A extends 0
  ? (B extends 0 ? 0 : 1)
  : (B extends 0 ? 1 : 0);

import { And, Or, Xor } from "./02-logic-gates";
import { Bit } from "./types";

// prettier-ignore
export type Sum<
  A extends Bit,
  B extends Bit,
  C extends Bit
> = Xor<Xor<A, B>, C>;

// prettier-ignore
export type Carry<
  A extends Bit,
  B extends Bit,
  C extends Bit
> = Or<And<C, Xor<A, B>>, And<A, B>>;

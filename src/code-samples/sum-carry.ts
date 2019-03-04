import { And, Or, Xor } from "./logic-gates";
import { Bit } from "./types";

export type Sum<
  A extends Bit,
  B extends Bit,
  C extends Bit
> = Xor<Xor<A, B>, C>;

export type Carry<
  A extends Bit,
  B extends Bit,
  C extends Bit
> = Or<And<C, Xor<A, B>>, And<A, B>>;

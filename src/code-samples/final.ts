import { Decimal, ToBinary } from "./to-bin";
import { ToDecimal } from "./to-deci";
import { AddBinary } from "./binary-adder";

export type Add<A extends Decimal, B extends Decimal> = ToDecimal<
  AddBinary<ToBinary<A>, ToBinary<B>>
>;

type Result = Add<7, 2>;

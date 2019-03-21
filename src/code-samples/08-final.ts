import { Decimal, ToBinary } from "./05-to-bin";
import { ToDecimal } from "./07-to-deci";
import { AddBinary } from "./04-binary-adder";

export type Add<A extends Decimal, B extends Decimal> = ToDecimal<
  AddBinary<ToBinary<A>, ToBinary<B>>
>;

type Result = Add<7, 2>;

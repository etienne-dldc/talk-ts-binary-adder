type Bit = 0 | 1;

type Byte = [Bit, Bit, Bit, Bit];

type DecimalTree = [
  [[[0, 1], [2, 3]], [[4, 5], [6, 7]]],
  [[[8, 9], [10, 11]], [[12, 13], [14, 15]]]
];

type Decimal = DecimalTree[any][any][any][any];

type ToBinary<T extends Decimal> = [
  T extends DecimalTree[0][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][0][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][0][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][0] ? 0 : 1
];

export type ToDecimal<T extends Byte | "overflow"> = ({
  [K in Decimal]: ToBinary<K> extends T ? K : never
})[Decimal];

type And<A extends Bit, B extends Bit> = B extends 1 ? (A extends 1 ? 1 : 0) : 0;

type Or<A extends Bit, B extends Bit> = B extends 0 ? (A extends 0 ? 0 : 1) : 1;

type Xor<A extends Bit, B extends Bit> = A extends 0
  ? (B extends 0 ? 0 : 1)
  : (B extends 0 ? 1 : 0);

type Sum<A extends Bit, B extends Bit, C extends Bit> = Xor<Xor<A, B>, C>;

type Carry<A extends Bit, B extends Bit, C extends Bit> = Or<And<C, Xor<A, B>>, And<A, B>>;

type AddBinary<A extends Byte, B extends Byte> = Carry<
  A[0],
  B[0],
  Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], 0>>>
> extends 1
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
    ]);

export type Add<A extends Decimal, B extends Decimal> = ToDecimal<
  AddBinary<ToBinary<A>, ToBinary<B>>
>;

type Result = Add<7, 2>;

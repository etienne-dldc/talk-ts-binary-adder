// prettier-ignore
type DecimalTree = [[[[[0,1],[2,3]],[[4,5],[6,7]]],[[[8,9],[10,11]],[[12,13],[14,15]]]],[[[[16,17],[18,19]],[[20,21],[22,23]]],[[[24,25],[26,27]],[[28,29],[30,31]]]]];

// prettier-ignore
type Decimal = DecimalTree[any][any][any][any][any];

// prettier-ignore
type ToBinary<T extends Decimal> = [
  T extends DecimalTree[0][any][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][0][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][0][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][0][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][any][0] ? 0 : 1,
]

type ToDecimal<T extends Byte | "overflow"> = ({
  [K in Decimal]: ToBinary<K> extends T ? K : never
})[Decimal];

type Bit = 0 | 1;

type Byte = [Bit, Bit, Bit, Bit, Bit];

type And<A extends Bit, B extends Bit> = B extends 1 ? (A extends 1 ? 1 : 0) : 0;
type Or<A extends Bit, B extends Bit> = B extends 0 ? (A extends 0 ? 0 : 1) : 1;
type Xor<A extends Bit, B extends Bit> = A extends 0
  ? (B extends 0 ? 0 : 1)
  : (B extends 0 ? 1 : 0);

type Sum<A extends Bit, B extends Bit, C extends Bit> = Xor<Xor<A, B>, C>;
type Carry<A extends Bit, B extends Bit, C extends Bit> = Or<And<C, Xor<A, B>>, And<A, B>>;

// prettier-ignore
type First<T extends Array<any>> = ((...args: T) => void) extends ((first: infer U, ...args: any) => void) ? U : never;

// prettier-ignore
type Shift<T extends Array<any>> = ((...args: T) => void) extends ((first: any, ...args: infer U) => void) ? U : never;

// prettier-ignore
type Unshift<Arr extends Array<any>, T> = ((arg: T, ...args: Arr) => void) extends ((...args: infer U) => void) ? U : never;

// prettier-ignore
interface AddBinaryRecursive<A extends Array<Bit>, B extends Array<Bit>, PrevCarry extends Bit, Result extends Array<any>> {
  result: Result;
  carry: PrevCarry;
  next: AddBinaryRecursive<Shift<A>, Shift<B>, Carry<First<A>, First<B>, PrevCarry>, Unshift<Result, Sum<First<A>, First<B>, PrevCarry>>>
}

type Reverse<B extends Byte> = [B[4], B[3], B[2], B[1], B[0]];

// prettier-ignore
type DetectOverflow<V extends { result: Array<any>; carry: Bit; next: any; }> = V['carry'] extends 1 ? 'overflow' : V['result'];

// prettier-ignore
type AddBinary<A extends Byte, B extends Byte> = DetectOverflow<AddBinaryRecursive<
  Reverse<A>, Reverse<B>, 0, []
>['next']['next']['next']['next']['next']>;

export type AddDecimal<A extends Decimal, B extends Decimal> = ToDecimal<
  AddBinary<ToBinary<A>, ToBinary<B>>
>;

export type Result = AddDecimal<9, 3>;

type Decibit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Decibyte = [Decibit, Decibit, Decibit, Decibit, Decibit, Decibit, Decibit, Decibit, Decibit];

type ReverseDecibyte<D extends Decibyte> = [D[8], D[7], D[6], D[5], D[4], D[3], D[2], D[1], D[0]];

type DeciCarry<T extends Decimal, C extends Decimal> = AddDecimal<T, C> extends Decibit ? 0 : 1;

// prettier-ignore
type DeciSum<T extends Decimal, C extends Bit> = (
  AddDecimal<T, C> extends 0 ? 0 : 
  AddDecimal<T, C> extends 1 ? 1 : 
  AddDecimal<T, C> extends 2 ? 2 : 
  AddDecimal<T, C> extends 3 ? 3 : 
  AddDecimal<T, C> extends 4 ? 4 : 
  AddDecimal<T, C> extends 5 ? 5 : 
  AddDecimal<T, C> extends 6 ? 6 : 
  AddDecimal<T, C> extends 7 ? 7 : 
  AddDecimal<T, C> extends 8 ? 8 : 
  AddDecimal<T, C> extends 9 ? 9 : 
  AddDecimal<T, C> extends 10 ? 0 : 
  AddDecimal<T, C> extends 11 ? 1 : 
  AddDecimal<T, C> extends 12 ? 2 : 
  AddDecimal<T, C> extends 13 ? 3 : 
  AddDecimal<T, C> extends 14 ? 4 : 
  AddDecimal<T, C> extends 15 ? 5 : 
  AddDecimal<T, C> extends 16 ? 6 : 
  AddDecimal<T, C> extends 17 ? 7 : 
  AddDecimal<T, C> extends 18 ? 8 : 
  AddDecimal<T, C> extends 19 ? 9 : 
  0
);

// prettier-ignore
interface AddDeciRecursive<A extends Array<Decibit>, B extends Array<Decibit>, PrevCarry extends Bit, Result extends Array<Decibit>> {
  result: Result;
  carry: PrevCarry;
  next: AddDeciRecursive<
    Shift<A>,
    Shift<B>,
    DeciCarry<AddDecimal<First<A>, First<B>>, PrevCarry>,
    Unshift<Result, DeciSum<AddDecimal<First<A>, First<B>>, PrevCarry>>>
}

// prettier-ignore
type DetectDeciOverflow<V extends { result: Array<any>; carry: Bit; next: any; }> = V['carry'] extends 1 ? 'overflow' : V['result'];

// prettier-ignore
type AddDeci<A extends Decibyte, B extends Decibyte> = DetectDeciOverflow<AddDeciRecursive<
  ReverseDecibyte<A>, ReverseDecibyte<B>, 0, []
>['next']['next']['next']['next']['next']['next']['next']['next']['next']>;

// 167890421 + 286300470 = 454 190 891
export type DeciResult = AddDeci<[1, 6, 7, 8, 9, 0, 4, 2, 1], [2, 8, 6, 3, 0, 0, 4, 7, 0]>;

/*
 * This is a 8 bit add function made only with Type
 * It's completly useless but kind of cool if you ask me
 * ¯\_(ツ)_/¯
 */

/*
const range = num => Array(num).fill(null).map((v, i) => i);
const split = arr => {
  if (arr.length === 2) {
    return arr;
  }
  return [split(arr.slice(0, arr.length / 2)), split(arr.slice(-arr.length / 2))]
}
const result = range(Math.pow(2, 8))
const splitted = split(result);
console.log(JSON.stringify(splitted))
copy(JSON.stringify(splitted));
console.log('copied to clipboard')
*/

// prettier-ignore
type DecimalTree = [
  [[[[[[[0, 1], [2, 3]], [[4, 5], [6, 7]]], [[[8, 9], [10, 11]], [[12, 13], [14, 15]]]], [[[[16, 17],
  [18, 19]], [[20, 21], [22, 23]]], [[[24, 25], [26, 27]], [[28, 29], [30, 31]]]]], [[[[[32, 33],
  [34, 35]], [[36, 37], [38, 39]]], [[[40, 41], [42, 43]], [[44, 45], [46, 47]]]], [[[[48, 49],
  [50, 51]], [[52, 53], [54, 55]]], [[[56, 57], [58, 59]], [[60, 61], [62, 63]]]]]], [[[[[[64, 65],
  [66, 67]], [[68, 69], [70, 71]]], [[[72, 73], [74, 75]], [[76, 77], [78, 79]]]], [[[[80, 81],
  [82, 83]], [[84, 85], [86, 87]]], [[[88, 89], [90, 91]], [[92, 93], [94, 95]]]]], [[[[[96, 97],
  [98, 99]], [[100, 101], [102, 103]]], [[[104, 105], [106, 107]], [[108, 109], [110, 111]]]],
  [[[[112, 113], [114, 115]], [[116, 117], [118, 119]]], [[[120, 121], [122, 123]], [[124, 125],
  [126, 127]]]]]]], [[[[[[[128, 129], [130, 131]], [[132, 133], [134, 135]]], [[[136, 137],
  [138, 139]], [[140, 141], [142, 143]]]], [[[[144, 145], [146, 147]], [[148, 149], [150, 151]]],
  [[[152, 153], [154, 155]], [[156, 157], [158, 159]]]]], [[[[[160, 161], [162, 163]], [[164, 165],
  [166, 167]]], [[[168, 169], [170, 171]], [[172, 173], [174, 175]]]], [[[[176, 177], [178, 179]],
  [[180, 181], [182, 183]]], [[[184, 185], [186, 187]], [[188, 189], [190, 191]]]]]], [[[[[[192, 193],
  [194, 195]], [[196, 197], [198, 199]]], [[[200, 201], [202, 203]], [[204, 205], [206, 207]]]],
  [[[[208, 209], [210, 211]], [[212, 213], [214, 215]]], [[[216, 217], [218, 219]], [[220, 221],
  [222, 223]]]]], [[[[[224, 225], [226, 227]], [[228, 229], [230, 231]]], [[[232, 233], [234, 235]],
  [[236, 237], [238, 239]]]], [[[[240, 241], [242, 243]], [[244, 245], [246, 247]]], [[[248, 249],
  [250, 251]], [[252, 253], [254, 255]]]]]]]];

// prettier-ignore
type Decimal = DecimalTree[any][any][any][any][any][any][any][any];

// prettier-ignore
type ToBinary<T extends Decimal> = [
  T extends DecimalTree[0][any][any][any][any][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][0][any][any][any][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][0][any][any][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][0][any][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][any][0][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][any][any][0][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][any][any][any][0][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][any][any][any][any][0] ? 0 : 1
]

type ToDecimal<T extends Byte | "overflow"> = ({
  [K in Decimal]: ToBinary<K> extends T ? K : never
})[Decimal];

type Bit = 0 | 1;

type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

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
type Rest<T extends Array<any>> = ((...args: T) => void) extends ((first: any, ...args: infer U) => void) ? U : never;

// prettier-ignore
type Unshift<Arr extends Array<any>, T> = ((arg: T, ...args: Arr) => void) extends ((...args: infer U) => void) ? U : never;

// prettier-ignore
interface AddBinaryRecursive<A extends Array<Bit>, B extends Array<Bit>, PrevCarry extends Bit, Result extends Array<any>> {
  result: Result;
  carry: PrevCarry;
  next: AddBinaryRecursive<Rest<A>, Rest<B>, Carry<First<A>, First<B>, PrevCarry>, Unshift<Result, Sum<First<A>, First<B>, PrevCarry>>>
}

type Reverse<B extends Byte> = [B[7], B[6], B[5], B[4], B[3], B[2], B[1], B[0]];

// prettier-ignore
type DetectOverflow<V extends { result: Array<any>; carry: Bit; next: any; }> = V['carry'] extends 1 ? 'overflow' : V['result'];

// prettier-ignore
type AddBinary<A extends Byte, B extends Byte> = DetectOverflow<AddBinaryRecursive<
  Reverse<A>, Reverse<B>, 0, []
>['next']['next']['next']['next']['next']['next']['next']['next']>;

export type Add<A extends Decimal, B extends Decimal> = ToDecimal<
  AddBinary<ToBinary<A>, ToBinary<B>>
>;

// Result has type 162
// Try to change the values and hover over Result to see its type
type Result = Add<120, 42>;

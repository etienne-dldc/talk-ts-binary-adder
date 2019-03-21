console.log(`It's all about types`);

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
*/

// prettier-ignore
type DecimalTree = [[[[[[[[0, 1], [2, 3]], [[4, 5], [6, 7]]], [[[8, 9], [10, 11]], [[12, 13], [14, 15]]]], [[[[16, 17], [18, 19]], [[20, 21], [22, 23]]], [[[24, 25], [26, 27]], [[28, 29], [30, 31]]]]], [[[[[32, 33], [34, 35]], [[36, 37], [38, 39]]], [[[40, 41], [42, 43]], [[44, 45], [46, 47]]]], [[[[48, 49], [50, 51]], [[52, 53], [54, 55]]], [[[56, 57], [58, 59]], [[60, 61], [62, 63]]]]]], [[[[[[64, 65], [66, 67]], [[68, 69], [70, 71]]], [[[72, 73], [74, 75]], [[76, 77], [78, 79]]]], [[[[80, 81], [82, 83]], [[84, 85], [86, 87]]], [[[88, 89], [90, 91]], [[92, 93], [94, 95]]]]], [[[[[96, 97], [98, 99]], [[100, 101], [102, 103]]], [[[104, 105], [106, 107]], [[108, 109], [110, 111]]]], [[[[112, 113], [114, 115]], [[116, 117], [118, 119]]], [[[120, 121], [122, 123]], [[124, 125], [126, 127]]]]]]], [[[[[[[128, 129], [130, 131]], [[132, 133], [134, 135]]], [[[136, 137], [138, 139]], [[140, 141], [142, 143]]]], [[[[144, 145], [146, 147]], [[148, 149], [150, 151]]], [[[152, 153], [154, 155]], [[156, 157], [158, 159]]]]], [[[[[160, 161], [162, 163]], [[164, 165], [166, 167]]], [[[168, 169], [170, 171]], [[172, 173], [174, 175]]]], [[[[176, 177], [178, 179]], [[180, 181], [182, 183]]], [[[184, 185], [186, 187]], [[188, 189], [190, 191]]]]]], [[[[[[192, 193], [194, 195]], [[196, 197], [198, 199]]], [[[200, 201], [202, 203]], [[204, 205], [206, 207]]]], [[[[208, 209], [210, 211]], [[212, 213], [214, 215]]], [[[216, 217], [218, 219]], [[220, 221], [222, 223]]]]], [[[[[224, 225], [226, 227]], [[228, 229], [230, 231]]], [[[232, 233], [234, 235]], [[236, 237], [238, 239]]]], [[[[240, 241], [242, 243]], [[244, 245], [246, 247]]], [[[248, 249], [250, 251]], [[252, 253], [254, 255]]]]]]]];

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

type DecimalMap = {
  [K in Decimal]: {
    k1: ToBinary<K>[0];
    k2: ToBinary<K>[1];
    k3: ToBinary<K>[2];
    k4: ToBinary<K>[3];
    k5: ToBinary<K>[4];
    k6: ToBinary<K>[5];
    k7: ToBinary<K>[6];
    k8: ToBinary<K>[7];
    decimal: K;
  }
};

type Bit = 0 | 1;

type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

type DecimalMapFiltered<T extends Byte | 'overflow'> = T extends 'overflow'
  ? 'overflow'
  : ({
      [K in keyof DecimalMap]: DecimalMap[K] extends {
        k1: T[0];
        k2: T[1];
        k3: T[2];
        k4: T[3];
        k5: T[4];
        k6: T[5];
        k7: T[6];
        k8: T[7];
      }
        ? DecimalMap[K]['decimal']
        : never
    });

type ToDecimal<T extends Byte | 'overflow'> = T extends 'overflow'
  ? 'overflow'
  : (DecimalMapFiltered<T>[keyof DecimalMapFiltered<T>]);

type And<A extends Bit, B extends Bit> = B extends 1 ? (A extends 1 ? 1 : 0) : 0;
type Or<A extends Bit, B extends Bit> = B extends 0 ? (A extends 0 ? 0 : 1) : 1;
type Xor<A extends Bit, B extends Bit> = A extends 0 ? (B extends 0 ? 0 : 1) : (B extends 0 ? 1 : 0);

type Sum<A extends Bit, B extends Bit, C extends Bit> = Xor<Xor<A, B>, C>;
type Carry<A extends Bit, B extends Bit, C extends Bit> = Or<And<C, Xor<A, B>>, And<A, B>>;

// prettier-ignore
type AddBinary<A extends Byte, B extends Byte> = (
  Carry<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>>>>> extends 1 ? 'overflow' : (
    [
      // bit 8
      Sum<A[0], B[0], Carry<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>>>>>,
      // bit 7
      Sum<A[1], B[1], Carry<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>>>>,
      // bit 6
      Sum<A[2], B[2], Carry<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>>>,
      // bit 5
      Sum<A[3], B[3], Carry<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>>,
      // bit 4
      Sum<A[4], B[4], Carry<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>>,
      // bit 3
      Sum<A[5], B[5], Carry<A[6], B[6], Carry<A[7], B[7], 0>>>,
      // bit 2
      Sum<A[6], B[6], Carry<A[7], B[7], 0>>,
      // bit 1
      Sum<A[7], B[7], 0>
    ])
)

export type Add<A extends Decimal, B extends Decimal> = ToDecimal<AddBinary<ToBinary<A>, ToBinary<B>>>;

// Result has type 162
// Try to change the values and hover over Result to see its type
type Result = Add<120, 42>;

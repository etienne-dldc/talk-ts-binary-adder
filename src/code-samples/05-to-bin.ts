// prettier-ignore
type DecimalTree = [
  [
    [
      [0, 1],
      [2, 3]
    ],
    [
      [4, 5],
      [6, 7]
    ]
  ],
  [
    [
      [8, 9],
      [10, 11]
    ],
    [
      [12, 13],
      [14, 15]
    ]
  ]
];

export type Decimal = DecimalTree[any][any][any][any];

export type ToBinary<T extends Decimal> = [
  T extends DecimalTree[0][any][any][any] ? 0 : 1,
  T extends DecimalTree[any][0][any][any] ? 0 : 1,
  T extends DecimalTree[any][any][0][any] ? 0 : 1,
  T extends DecimalTree[any][any][any][0] ? 0 : 1
];

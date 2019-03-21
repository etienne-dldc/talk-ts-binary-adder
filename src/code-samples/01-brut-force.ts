// prettier-ignore
export type Add<N1, N2> = (
  [N1, N2] extends [0, 0] ? 0 :
  [N1, N2] extends [0, 1] ? 1 :
  [N1, N2] extends [0, 2] ? 2 :
  [N1, N2] extends [1, 0] ? 1 :
  [N1, N2] extends [1, 1] ? 2 :
  [N1, N2] extends [1, 2] ? 3 :
  [N1, N2] extends [2, 0] ? 2 :
  [N1, N2] extends [2, 1] ? 3 :
  [N1, N2] extends [2, 2] ? 4 : number
);

type Result = Add<1, 2>;
// It works

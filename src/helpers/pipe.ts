// prettier-ignore
type Pipe = {
  <Args extends any[], T0>(fn0: (...xs: Args) => T0): (...xs: Args) => T0;
  <Args extends any[], T0, T1>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1): (...xs: Args) => T0;
  <Args extends any[], T0, T1, T2>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2): (...xs: Args) => T2;
  <Args extends any[], T0, T1, T2, T3>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3): (...xs: Args) => T3;
  <Args extends any[], T0, T1, T2, T3, T4>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4): (...xs: Args) => T4;
  <Args extends any[], T0, T1, T2, T3, T4, T5>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4, fn5: (x: T4) => T5): (...xs: Args) => T5;
  <Args extends any[], T0, T1, T2, T3, T4, T5, T6>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4, fn5: (x: T4) => T5, fn6: (x: T5) => T6): (...xs: Args) => T6;
  <Args extends any[], T0, T1, T2, T3, T4, T5, T6, T7>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4, fn5: (x: T4) => T5, fn6: (x: T5) => T6, fn7: (x: T6) => T7): (...xs: Args) => T7;
  <Args extends any[], T0, T1, T2, T3, T4, T5, T6, T7, T8>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4, fn5: (x: T4) => T5, fn6: (x: T5) => T6, fn7: (x: T6) => T7, fn8: (x: T7) => T8): (...xs: Args) => T8;
  <Args extends any[], T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(fn0: (...xs: Args) => T0, fn1: (x: T0) => T1, fn2: (x: T1) => T2, fn3: (x: T2) => T3, fn4: (x: T3) => T4, fn5: (x: T4) => T5, fn6: (x: T5) => T6, fn7: (x: T6) => T7, fn8: (x: T7) => T8, fn9: (x: T8) => T9): (...xs: Args) => T9;
}

const pipe: Pipe = (
  fn0: (...xs: any[]) => any,
  ...fns: ((x: any) => any)[]
) => (...args: any[]) => fns.reduce((x, fn) => fn(x), fn0(...args));

export default pipe;

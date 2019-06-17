import { concat, filter, flatten, map, reduce, split, tail } from "rambda";

interface KeyboardType {
  [name: number]: string[];
}

const keyboard: KeyboardType = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const flat = (xss: string[][]) => reduce((acc, xs) => concat(xs, acc) , [], xss);

const combine = (suffixes: string[]) => (word: string): string[] =>
  suffixes.map((suffix) => `${word}${suffix}`);

const toWordList = (isExisting: ((word: string) => boolean)) => (numbers: string) =>
  filter(
    isExisting,
    flatten(reduce(
      (words, numberToConvert) =>
        flat(map(combine(keyboard[parseInt(numberToConvert, 10)]), words))
      ,
      keyboard[parseInt(numbers.charAt(0), 10)],
      tail(split("", numbers))
    )),
  );

const testOnly = {
  combine,
  flat,
};

export {
  testOnly,
  toWordList,
};

import { concat, filter, flatten, map, reduce, split, tail } from "rambda";

interface KeyboardType {
  [name: number]: string[];
}

const keyboard: KeyboardType = {
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const onlyNumbersWithLetters: RegExp = /[2-9]+/g;

const matching = (numbers: string): string =>
  numbers.match(onlyNumbersWithLetters) ?
    numbers.match(onlyNumbersWithLetters).join() : "";

const fromKeyboard = (digits: string): string[] =>
  keyboard[parseInt(digits, 10)];

const flat = (xss: string[][]) => reduce((acc, xs) => concat(xs, acc) , [], xss);

const addSuffix = (suffixes: string[]) => (word: string): string[] =>
  suffixes.map((suffix) => `${word}${suffix}`);

const toWordList = (isExisting: ((word: string) => boolean)) => (numbers: string) => {
  const matched = matching(numbers);
  if (!matched) { return []; }

  return filter(
    isExisting,
    flatten(
      reduce(
        (words, numberToConvert) => flat(map(addSuffix(fromKeyboard(numberToConvert)), words)),
        fromKeyboard(matched.charAt(0)),
        tail(split("", matched))
      )
    ),
  );
};

const testOnly = {
  addSuffix,
  flat,
};

export {
  testOnly,
  toWordList,
};

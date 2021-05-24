import { indicesArray } from './indices_array';

export function buildLowercaseAlphabet() {
  const charCode = 'a'.charCodeAt(0);
  return indicesArray(26).map(
    i => String.fromCharCode(charCode + i)
  );
}

export function buildUppercaseAlphabet() {
  const charCode = 'A'.charCodeAt(0);
  return indicesArray(26).map(
    i => String.fromCharCode(charCode + i)
  );
}

export const filledSquare = '';
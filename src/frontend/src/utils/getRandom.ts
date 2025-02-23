/**
 * Function that get random element from list with generic type
 * @param {T[]} list - argument array
 * @returns {T} - item of list
 */
export const getRandom = <T>(list: T[]): T => {
  const idx: number = Math.floor(Math.random() * list.length);

  return list[idx];
};

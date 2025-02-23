/**
 * Function that based on name of avatar returns the full path of image
 * @param {string} name - Name of avatar
 * @returns {string} - Full path of avatar image - from - https://www.freepik.com/
 */
export const getAvatarByName = (name: string): string => `https://img.freepik.com/${name}.jpg`;

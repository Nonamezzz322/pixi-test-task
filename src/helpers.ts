/**
 * @function
 * getting a random hex color index
 * @returns {number}
 */
export const getRandomColor = (): number => parseInt(Math.floor(Math.random() * 16777215).toString(), 16);

/**
 * Getting a random integer, where argument is the maximum number that can be received
 * @function
 * @example
 * controlledRandom(10) will return a random integer between 0 and 10
 * @returns {number}
 */
export const controlledRandom = (max: number): number => Math.floor(Math.random() * max);

import { randomInt } from 'node:crypto';

const getRandomInt = (min, max) => randomInt(min, max + 1);

export default getRandomInt;

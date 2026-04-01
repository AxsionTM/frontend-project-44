import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Алгоритм Евклида для нахождения НОД
const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getRoundData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);

  return [question, String(answer)];
};

export default () => runEngine(description, getRoundData);
    
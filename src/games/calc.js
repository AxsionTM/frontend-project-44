import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRoundData = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);

  return [question, String(answer)];
};

export default () => runEngine(description, getRoundData);

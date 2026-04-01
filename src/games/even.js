import runEngine from '../index.js'
import getRandomInt from '../utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

// Предикат (функция-вопрос), проверяющий на чётность
const isEven = num => num % 2 === 0

const getRoundData = () => {
  const minNumber = 1
  const maxNumber = 100
  const number = getRandomInt(minNumber, maxNumber)

  const question = String(number)
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)

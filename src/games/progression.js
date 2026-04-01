import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Функция для генерации самой прогрессии
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const getRoundData = () => {
  const start = getRandomInt(1, 20) // Начальное число
  const step = getRandomInt(2, 10) // Шаг прогрессии
  const length = getRandomInt(5, 10) // Длина (от 5 до 10 по заданию)

  const progression = generateProgression(start, step, length)

  // Выбираем случайный индекс, который спрячем
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = progression[hiddenIndex]

  // Заменяем число на две точки
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, String(correctAnswer)]
}

export default () => runEngine(description, getRoundData)

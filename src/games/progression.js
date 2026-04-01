import crypto from 'crypto'
import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

const getRandomInt = (min, max) => crypto.randomInt(min, max + 1)

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

const getRoundData = () => {
  const minStart = 1
  const maxStart = 20
  const minStep = 2
  const maxStep = 10
  const minLen = 5
  const maxLen = 10

  const start = getRandomInt(minStart, maxStart)
  const step = getRandomInt(minStep, maxStep)
  const length = getRandomInt(minLen, maxLen)

  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = progression[hiddenIndex]

  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, String(correctAnswer)]
}

export default () => runEngine(description, getRoundData)

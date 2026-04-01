import readlineSync from 'readline-sync'

export default () => {
  const name = readlineSync.question('May I have your name? ')

  console.log(`Hellosssssss, ${name}!`)
  return name
}

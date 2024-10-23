const randomizeFunction = () => {
  const randInt = parseInt(Math.random() * 100)
  return (-1) ** randInt
}
export const randomizeArray = (arr) => {
  return [...arr].sort(randomizeFunction)
}

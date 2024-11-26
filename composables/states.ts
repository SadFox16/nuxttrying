// export const useStates = () => {
//   return ref()
// }

export const useCounter = () => useState<number>('counter', () =>  0) //global state for counter
export const useColor = () => useState<string>('color', () => 'pink') //global state for color
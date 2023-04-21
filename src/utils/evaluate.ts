import { State } from '../types/store'

export function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: State) {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)

  if (isNaN(previous) || isNaN(current)) {
    return ''
  }

  let computation: string | number | null = null

  switch (operation) {
    case '+':
      computation = previous + current
      break

    case '/':
      computation = previous / current
      break

    case '-':
      computation = previous - current
      break

    case '*':
      computation = previous * current
      break

    default:
      break
  }

  return computation?.toString()
}

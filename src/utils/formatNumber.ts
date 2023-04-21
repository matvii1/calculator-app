const INTEGER_FORMATTING = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

export function formatNumber(currentOperand: string) {
  if (!currentOperand) {
    return
  }

  const [integer, decimal] = currentOperand.toString().split('.')

  if (!decimal) {
    return INTEGER_FORMATTING.format(+integer)
  } else {
    return `${INTEGER_FORMATTING.format(+integer)}.${decimal}`
  }
}
import { ACTIONS } from '../types/store'

type Props = {
  digit: string | '.'
  dispatch: any
}

export default function DigitButton({ digit, dispatch }: Props) {
  function handleClick() {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
  }

  return (
    <button className={digit === '.' ? 'dot' : ''} onClick={handleClick}>
      {digit}
    </button>
  )
}

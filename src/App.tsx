import { useReducer } from 'react'
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import { ACTIONS } from './types/store'
import { formatNumber } from './utils/formatNumber'
import { reducer } from './utils/reducer'

export default function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: '',
      previousOperand: '',
      operation: '',
      overwrite: false,
    }
  )

  function handleClear() {
    dispatch({ type: ACTIONS.CLEAR })
  }

  function onSubmit() {
    dispatch({ type: ACTIONS.EVALUATE })
  }

  function onDelete() {
    dispatch({ type: ACTIONS.DELETE_DIGIT })
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-operand">
          {formatNumber(previousOperand!)} {operation}
        </div>
        <div className="current-operand">{`${
          formatNumber(currentOperand!) || ''
        }`}</div>
      </div>
      <button className="span-two" onClick={handleClear}>
        AC
      </button>
      <button className="" onClick={onDelete}>
        DEL
      </button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two equal operation-btn" onClick={onSubmit}>
        =
      </button>
    </div>
  )
}

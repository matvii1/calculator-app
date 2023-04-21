import { Dispatch } from 'react'
import { ACTIONS } from '../types/store'

type Props = {
  operation: string
  dispatch: any
}

export default function OperationButton({ dispatch, operation }: Props) {
  function handleClick() {
    dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation } })
  }

  return (
    <button className="operation-btn" onClick={handleClick}>
      {operation}
    </button>
  )
}

import { ACTIONS, Action, State } from '../types/store'
import { evaluate } from './evaluate'

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: payload!.digit,
        }
      }

      if (payload!.digit === '.' && state.currentOperand!.includes('.')) {
        return state
      }

      if (payload!.digit === '0' && state.currentOperand === '0') {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload!.digit}`,
      }
    case ACTIONS.CHOSE_OPERATION:
      if (!state.previousOperand && !state.currentOperand) {
        return state
      }

      if (!state.previousOperand) {
        return {
          ...state,
          previousOperand: state.currentOperand!,
          currentOperand: null,
          operation: payload!.operation,
        }
      }

      if (!state.currentOperand) {
        return {
          ...state,
          operation: payload!.operation,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state)!,
        operation: payload!.operation,
        currentOperand: null,
      }

    case ACTIONS.CLEAR:
      return {
        currentOperand: null,
        previousOperand: null,
        operation: null,
        overwrite: false,
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }

      if (state.currentOperand!.length === 1) {
        return {
          ...state,
          currentOperand: null,
        }
      }

      if (state.currentOperand) {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        }
      }

    case ACTIONS.EVALUATE:
      if (!state.operation || !state.previousOperand || !state.currentOperand) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        operation: '',
        currentOperand: evaluate(state)!,
        previousOperand: '',
      }

    default:
      return state
  }
}

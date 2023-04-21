export enum ACTIONS {
  ADD_DIGIT = 'add_digit',
  CHOSE_OPERATION = 'chose_operation',
  CLEAR = 'clear',
  DELETE_DIGIT = 'delete_digit',
  EVALUATE = 'evaluate',
}

export interface State {
  currentOperand: string | null
  previousOperand: string | null
  operation: string | null
	overwrite: boolean
}

export interface Action {
  type: ACTIONS
  payload?: {
    digit: string
    operation: string
  }
}
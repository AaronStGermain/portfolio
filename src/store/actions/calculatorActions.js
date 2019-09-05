import { calculatorActionTypes } from "./action-types";

export const insertNumber = payload => ({
  type: calculatorActionTypes.INSERT_NUMBER,
  payload
});

export const insertInput = payload => ({
  type: calculatorActionTypes.INSERT_INPUT,
  payload
});

export const insertOperator = payload => ({
  type: calculatorActionTypes.INSERT_OPERATOR,
  payload
});

export const insertDecimal = payload => ({
  type: calculatorActionTypes.INSERT_DECIMAL,
  payload
});
export const solve = payload => ({
  type: calculatorActionTypes.SOLVE,
  payload
});

export const createCalculator = payload => ({
  type: calculatorActionTypes.CREATE_CALCULATOR,
  payload
});

export const resetCalculator = payload => ({
  type: calculatorActionTypes.RESET_CALCULATOR,
  payload
});

export const resetActionHistory = payload => ({
  type: calculatorActionTypes.RESET_ACTION_HISTORY,
  payload
});

export const findAdditiveInverse = payload => ({
  type: calculatorActionTypes.FIND_ADDITIVE_INVERSE,
  payload
});

export const removeCalculatorState = payload => ({
  type: calculatorActionTypes.REMOVE_CALCULATOR_STATE,
  payload
});

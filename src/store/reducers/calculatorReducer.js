import { calculatorActionTypes } from "../actions/action-types";
import { calculatorModel } from "../constants";

const initialState = {
  data: {},
  allIds: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case calculatorActionTypes.CREATE_CALCULATOR:
      return createCalculator(state, payload);
    case calculatorActionTypes.REMOVE_CALCULATOR_STATE:
      return removeCalculatorState(state, payload);
    case calculatorActionTypes.INSERT_NUMBER:
      return insertNumber(state, payload);
    case calculatorActionTypes.INSERT_DECIMAL:
      return insertDecimal(state, payload);
    case calculatorActionTypes.INSERT_OPERATOR:
      return insertOperator(state, payload);
    case calculatorActionTypes.INSERT_INPUT:
      return insertInput(state, payload);
    case calculatorActionTypes.SOLVE:
      return solve(state, payload);
    case calculatorActionTypes.RESET_ACTION_HISTORY:
      return resetActionHistory(state, payload);
    case calculatorActionTypes.FIND_ADDITIVE_INVERSE:
      return findAdditiveInverse(state, payload);
    case calculatorActionTypes.RESET_CALCULATOR:
      return resetCalculator(state, payload);
    case calculatorActionTypes.BACKSPACE:
      return resetCalculator(state, payload);
    default:
      return state;
  }
};

const insertNumber = (state, payload) => {
  const { id, value } = payload;
  const calculator = state.data[id];
  const isFloat = `${calculator.input}`.indexOf(".") !== -1 ? true : false;

  const newInput =
    calculator.operatorLastPressed || calculator.solved
      ? value
      : `${calculator.input}${value}`;

  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        input: newInput,
        resultDisplay: !isFloat ? formatNumberString(newInput) : newInput,
        operatorLastPressed: false,
        solved: false
      }
    }
  };
};

const insertDecimal = (state, payload) => {
  const { id } = payload;
  const calculator = state.data[id];
  const { resultDisplay, input } = calculator;
  const isFloat = `${resultDisplay}`.indexOf(".") !== -1 ? true : false;

  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        input: !isFloat ? `${+input}.` : input,
        resultDisplay: isFloat ? resultDisplay : `${resultDisplay}.`,
        operatorLastPressed: false
      }
    }
  };
};

const createCalculator = (state, payload) => {
  const calculator = {
    ...calculatorModel,
    id: payload
  };
  return {
    ...state,
    data: {
      ...state.data,
      [payload]: calculator
    },
    allIds: [...state.allIds, payload]
  };
};

const removeCalculatorState = (state, payload) => {
  const calculators = { ...state.data };
  const { id } = payload;

  delete calculators[id];

  return {
    ...state,
    data: {
      ...calculators
    },
    allIds: state.allIds.filter(aId => aId !== id)
  };
};

const insertOperator = (state, payload) => {
  const { id, value } = payload;
  const calculator = state.data[id];
  const { operatorLastPressed, actionHistory } = calculator;
  const updateActionHistory = operatorLastPressed
    ? popAndReturnArray(actionHistory)
    : [...actionHistory];
  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        operatorLastPressed: true,
        solved: false,
        actionHistory: [...updateActionHistory, value]
      }
    }
  };
};

const insertInput = (state, payload) => {
  const { id } = payload;
  const calculator = state.data[id];
  const result = //sets the first input of the calculator to the result
    calculator.actionHistory.length === 0
      ? calculator.input
      : calculator.result;

  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        operatorLastPressed: false,
        solved: false,
        result: result,
        actionHistory: [...calculator.actionHistory, +calculator.input]
      }
    }
  };
};

const solve = (state, payload) => {
  const { id, prevResult, operator, value } = payload;
  const calculator = state.data[id];

  const newResult = solveHelper(+prevResult, +value, operator);
  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        input: newResult,
        result: newResult,
        operatorLastPressed: false,
        solved: true,
        resultDisplay: formatNumberString(newResult)
      }
    }
  };
};

const solveHelper = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "÷":
      return a / b;
    default:
      return false;
  }
};

const resetCalculator = (state, payload) => {
  const { id } = payload;
  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculatorModel,
        id
      }
    }
  };
};

const findAdditiveInverse = (state, payload) => {
  const { id } = payload;
  const calculator = state.data[id];
  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        input: -calculator.input,
        resultDisplay: formatNumberString(-calculator.input)
      }
    }
  };
};

const resetActionHistory = (state, payload) => {
  const { id } = payload;
  const calculator = state.data[id];
  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...calculator,
        actionHistory: []
      }
    }
  };
};

const popAndReturnArray = array => {
  array.pop();
  return array;
};

const formatNumberString = number => {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8
  }).format(number);
};

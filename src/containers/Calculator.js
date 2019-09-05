import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  insertNumber,
  createCalculator,
  removeCalculatorState,
  insertOperator,
  insertInput,
  insertDecimal,
  resetCalculator,
  resetActionHistory,
  findAdditiveInverse,
  solve
} from "../store/actions/calculatorActions";
import Key from "../components/CalculatorKey";

class Calculator extends Component {
  componentDidMount() {
    this.props.createCalculator(this.props.id);
  }

  componentWillUnmount() {
    this.props.removeCalculatorState({ id: this.props.id });
  }

  handleOperatorClick = (event, { value }) => {
    const { id, insertOperator, insertInput, solve, calculator } = this.props;
    const { actionHistory, operatorLastPressed, result, input } = calculator;

    if (!operatorLastPressed) insertInput({ id });

    insertOperator({ id, value });
    //Check to see if there's something to solve in the actionHistory
    if (actionHistory.length > 0 && !operatorLastPressed) {
      solve({
        id,
        operator: actionHistory[actionHistory.length - 1],
        prevResult: result,
        value: input
      });
    }
  };

  handleNumClick = (event, { value }) => {
    const { insertNumber, id } = this.props;
    insertNumber({ id, value });
  };

  handleResetClick = event => {
    const { resetCalculator, id } = this.props;
    resetCalculator({ id });
  };

  handleInverseClick = event => {
    const { findAdditiveInverse, id } = this.props;
    findAdditiveInverse({ id });
  };

  handleDecimalClick = event => {
    const { insertDecimal, id } = this.props;
    insertDecimal({ id });
  };

  handleSolveClick = (event, { value }) => {
    const { id, solve, resetActionHistory, calculator } = this.props;
    const { actionHistory, result, input } = calculator;

    if (actionHistory.length > 0)
      solve({
        id,
        operator: actionHistory[actionHistory.length - 1],
        prevResult: result,
        value: input
      });

    resetActionHistory({ id });
  };

  render() {
    return (
      <React.Fragment>
        <StyledCalculatorDisplay>
          <StyledActionHistory>
            {this.props.calculator &&
              this.props.calculator.actionHistory.join(" ")}
          </StyledActionHistory>
          <StyledResult>
            {this.props.calculator && this.props.calculator.resultDisplay}
          </StyledResult>
        </StyledCalculatorDisplay>
        <StyledButtonListContainer>
          <StyledButtonListGrid>
            <Key value="CE" handleMouseUp={this.handleResetClick} />
            <Key value="C" handleMouseUp={this.handleResetClick} />
            <Key value="DEL" handleMouseUp={this.handleResetClick} />
            <Key value="÷" handleMouseUp={this.handleOperatorClick} />
            <Key value="7" handleMouseUp={this.handleNumClick} />
            <Key value="8" handleMouseUp={this.handleNumClick} />
            <Key value="9" handleMouseUp={this.handleNumClick} />
            <Key value="*" handleMouseUp={this.handleOperatorClick} />
            <Key value="4" handleMouseUp={this.handleNumClick} />
            <Key value="5" handleMouseUp={this.handleNumClick} />
            <Key value="6" handleMouseUp={this.handleNumClick} />
            <Key value="-" handleMouseUp={this.handleOperatorClick} />
            <Key value="1" handleMouseUp={this.handleNumClick} />
            <Key value="2" handleMouseUp={this.handleNumClick} />
            <Key value="3" handleMouseUp={this.handleNumClick} />
            <Key value="+" handleMouseUp={this.handleOperatorClick} />
            <Key value="-/+" handleMouseUp={this.handleInverseClick} />
            <Key value="0" handleMouseUp={this.handleNumClick} />
            <Key value="." handleMouseUp={this.handleDecimalClick} />
            <Key value="=" handleMouseUp={this.handleSolveClick} />
          </StyledButtonListGrid>
        </StyledButtonListContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    calculator: state.calculators.data[ownProps.id]
  };
};

export default connect(
  mapStateToProps,
  {
    insertNumber,
    insertOperator,
    insertInput,
    insertDecimal,
    createCalculator,
    removeCalculatorState,
    resetCalculator,
    resetActionHistory,
    findAdditiveInverse,
    solve
  }
)(Calculator);

const StyledCalculatorDisplay = styled.div`
  flex: 10;
  flex-direction: row;
  background-color: hsl(0, 0%, 18%);
  padding: 10px;
  text-align: right;
  font-family: "typeface-orbitron";
`;

const StyledResult = styled.div`
  font-size: 30px;
`;

const StyledActionHistory = styled.div`
  color: hsl(0, 0%, 68%);
  overflow-x: auto;
`;

const StyledButtonListContainer = styled.div`
  flex: 30;
  padding: 5px;
`;
const StyledButtonListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

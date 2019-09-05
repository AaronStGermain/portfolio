import React from "react";
import styled from "styled-components";

const Key = ({ value, handleMouseUp }) => {
  const isNumber = Number.isInteger(+value);
  return (
    <StyledKey
      isNumber={isNumber}
      onMouseUp={event => handleMouseUp(event, { value })}
    >
      {value}
    </StyledKey>
  );
};

const StyledKey = styled.button.attrs(props => ({
  className: `btn waves-effect waves-light blue-grey ${!props.isNumber &&
    "darken-2"}`
}))``;

export default Key;

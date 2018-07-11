import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  margin-bottom: 15px;
`;

const StyledColumn = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 5px;
  padding-left: 5px;
`;

const StyledLabelColumn = StyledColumn.extend`
  @media (min-width: 8.021in) {
    -ms-flex: 0 0 1.5in;
    flex: 0 0 1.5in;
    max-width: 1.5in;
  }
  @media (max-width: 8.02in) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;

    font-size: 130%;
    -ms-text-size-adjust: 130%;
    -webkit-text-size-adjust: 130%;

    border-bottom: 1px solid black;
    margin-bottom: 4px;
  }
`;

const StyledContentColumn = StyledColumn.extend`
  @media (min-width: 8.021in) {
    -ms-flex: 0 0 6.5in;
    flex: 0 0 6.5in;
    max-width: 6.5in;
  }
  @media (max-width: 8.02in) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Group = ({ name, ...rest }) => (
  <StyledRow>
    <StyledLabelColumn>
      <strong>{name}:</strong>
    </StyledLabelColumn>
    <StyledContentColumn {...rest} />
  </StyledRow>
);

export default Group;

import React from "react";
import styled from "styled-components";

const StyledHeadingRow = styled.div`
  display: -ms-flexbox;
  display: flex;

  -ms-flex-pack: justify;
  justify-content: space-between;

  margin-bottom: 2px;
`;

const StyledDates = styled.div`
  text-align: right;
`;

const Item = ({ name, location, dates, tagline, children, ...rest }) => (
  <React.Fragment>
    <StyledHeadingRow>
      <div>
        <strong>{name}</strong>, {location}
      </div>
      <StyledDates>{dates}</StyledDates>
    </StyledHeadingRow>
    <div>
      <em>{tagline}</em>
    </div>
    <ul>
      {React.Children.map(children, (child) => <li {...rest}>{child}</li>)}
    </ul>
  </React.Fragment>
);

export default Item;

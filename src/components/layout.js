import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import "./layout.css";

const StyledHeader = styled.div`
  div {
    margin-left: -10px;
    margin-right: -10px;

    h1 {
      margin: 0;
    }

    @media (min-width: 8.02in) {
      address {
        text-align: right;
      }
    }

    @media (max-width: 8.021in) {
      h1,
      address {
        text-align: center;
      }
    }
  }
`;

const StyledHeaderRow = styled.div`
  @media (min-width: 8.02in) {
    display: -ms-flexbox;
    display: flex;

    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

const StyledContents = styled.div`
  margin: auto auto;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ data, ...rest }) => (
  <>
    <Helmet title="Resume for Nate Radebaugh" />
    <StyledContents>
      <StyledHeader>
        <StyledHeaderRow>
          <h1>Nate Radebaugh</h1>
          <address>
            530-628-3723 (mobile)<br />
            nate.radebaugh@outlook.com<br />
            www.naterad.com
          </address>
        </StyledHeaderRow>
      </StyledHeader>
      <div {...rest} />
    </StyledContents>
  </>
);

export default Layout;

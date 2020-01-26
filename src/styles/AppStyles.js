/* istanbul ignore file */
import styled from "styled-components";

const AppStyles = styled.div`
  min-height: calc(100vh - 53px);
  a {
    color: ${props => props.theme.mint};
    &:hover {
      color: pink;
    }
  }

  img {
    height: 250px;
  }
`;

export default AppStyles;

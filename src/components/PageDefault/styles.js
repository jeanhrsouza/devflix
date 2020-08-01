import styled, { css } from 'styled-components';

const Main = styled.main`
   background-color: #44475a;
   color: #f8f8f2;
   flex: 1;
   padding-top: 50px;
   padding-left: 5%;
   padding-right: 5%;
   ${({ paddingAll }) => paddingAll !== undefined
     && css`
       padding: ${paddingAll};
     `}
 `;

export default Main;

/* eslint-disable arrow-body-style */
import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.secondary;
  }};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 115%;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 100%;
    font-weight: 400;
    line-height: 1;
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    border-radius: 10px;
    font-size: 14px;
    font-weight: 300;
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-size: 14px;
    font-weight: 400;
    margin: 0 1em .5em 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;

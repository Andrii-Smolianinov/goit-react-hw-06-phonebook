import styled from 'styled-components';

export const ContactUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #b1c5f1;
  list-style: none;
  svg {
    margin: 0 5px;
  }

  & li {
    position: relative;
    height: 25px;
    text-align: left;
    padding: 0 75px 0 0;
    margin: 10px 0;
    background-color: #f5f5dc;
    border: 2px solid #3b5998;
    cursor: pointer;
  }

  button {
    position: absolute;
    right: 10px;
    top: 4px;
    font-weight: 600;
    color: #b1c5f1;
    background-color: #3b5998;
    border: 2px solid #3b5998;
    border-radius: 4px;
    border: transparent;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    text-align: center;
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover {
    color: #3b5998;
    background-color: #b1c5f1;    
  }
`;

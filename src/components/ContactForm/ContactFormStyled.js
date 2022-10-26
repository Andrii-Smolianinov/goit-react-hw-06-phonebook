import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  color: #3b5998;
  & label {
    margin-bottom: 15px;
  }
  & input {
    margin: 0 0 10px 25px;
    border: 2px solid #3b5998;
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;    
  }
  & input:focus {
    border-color: #4c94ff;
  }
  & button {
    width: fit-content;    
    padding: 5px 8px;
    margin-top: 10px;
    font-weight: 600;
    color: #b1c5f1;
    border-radius: 3px;
    border: 2px solid #3b5998;
    background-color: #3b5998;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  button:hover {
    color: #3b5998;
    outline: transparent;
    border: 2px solid #3b5998;
    background-color: #b1c5f1;
    
  }
`;

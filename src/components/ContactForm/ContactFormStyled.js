import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  color: #3b5998;
  .label {
    margin-bottom: 15px;
  }
  .input {
    margin-bottom: 15px;
    border: 2px solid #3b5998;
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    margin-bottom: 10px;
  }
  .button {
    background-color: #3b5998;
    width: fit-content;
    padding: 5px 8px;
    border-radius: 5px;
    margin-top: 20px;
    border: 2px solid rgba(33, 33, 33, 0.2);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }  
`;

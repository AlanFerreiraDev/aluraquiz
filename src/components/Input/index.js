/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Vamos criar nossa função estilizada para o Input
const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px; 
`;

// Aqui teremos nosso componente Input
// Preciso receber um argumento que será a função ,pois o a tag input (HTML)
// É diferente da tag Input (componenete React criado)
// eslint-disable-next-line no-unused-vars
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

// Procurar depois no video o motivo da instalção dessa lb prop-types
// Estou setando aqui que todos esses valores são Obrigatórios com o isRequired
// E que são funções ou valores string
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
};

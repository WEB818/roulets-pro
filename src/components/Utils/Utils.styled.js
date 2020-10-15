import styled from "styled-components";

export const Button = styled.button`
  background: #ea4b8b;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 30px;
`;

export const Label = styled.label`
  min-width: 100px;
  padding: 0 10px;
`;

export const Selection = styled.select`
  border: none;
  border-bottom: 1px solid #ea4b8b;
  max-width: 200px;
  width: 150px;
  font-family: "Noto Sans TC", sans-serif;
  margin: 10px;
`;

export const Input = styled.input`
  max-width: 150px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #ea4b8b;
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 300px;
  margin: 10px;
  font-family: "Noto Sans TC", sans-serif;
`;

export const LinkTo = styled.a`
  color: #ea4b8b;
`;

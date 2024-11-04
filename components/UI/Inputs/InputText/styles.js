import styled from "styled-components/native";

export const Content = styled.View`
  width: 100%;
  border-radius: 5px;
  border: ${(props) => props.$focused ? 'solid 2px #187b13' : 'solid 2px #6a6262'};
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  
`

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #c9c9c9;
`
import styled from "styled-components/native";
import fonts from "@shared/fonts/index";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled.TextInput`
  margin-top: 40px;
  margin-bottom: 10px;
  height: 45px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: white;
  width: 80%;
  font-size: 18px;
  font-family: ${fonts.Regular};
`;

export const TouchableButton = styled.View`
  border-radius: 10px;
  width: 80%;
  overflow: hidden;
`;

export const SearchButton = styled.View`
  height: 45px;
  background-color: #ffa100;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 23px;
  font-family: ${fonts.Bold};
  color: #292929;
`;

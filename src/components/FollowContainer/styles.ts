import fonts from "@shared/fonts/index";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  width: 32%;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  font-family: ${fonts.Bold};
  font-size: 30px;
  color: white;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${fonts.Light};
  font-size: 20px;
`;

import fonts from "@shared/fonts";
import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 25px;
  padding-top: 5px;
`;

export const TitleText = styled.Text`
  font-family: ${fonts.Bold};
  color: white;
  font-size: 26px;
  margin-bottom: 5px;
`;

export const DescriptionText = styled.Text`
  font-family: ${fonts.Thin};
  color: white;
  font-size: 18px;
  width: 300px;
`;

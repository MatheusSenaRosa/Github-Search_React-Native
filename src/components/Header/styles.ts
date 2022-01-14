import fonts from "@shared/fonts/index";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  padding: 0 20px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: #1f1f1f;
  height: 100px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  margin: 0 auto;
  color: white;
  font-family: ${fonts.Medium};
  font-size: 20px;
  padding-right: 25px;
`;

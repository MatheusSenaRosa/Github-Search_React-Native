import fonts from "@shared/fonts/index";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 120px;
  padding: 0 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.View`
  height: 66px;
  width: 66px;
  border-radius: 33px;
  border: 2px solid white;
  overflow: hidden;
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 22px;
  color: white;
  font-family: ${fonts.Bold};
`;

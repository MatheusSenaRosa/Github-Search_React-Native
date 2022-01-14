import fonts from "@shared/fonts/index";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 25px 25px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-family: ${fonts.Bold};
`;

export const Description = styled.Text`
  font-size: 14px;
  color: white;
  font-family: ${fonts.Light};
`;

export const BottomContainer = styled.View`
  min-height: 20px;
  margin-top: 17px;
  flex-direction: row;
  justify-content: space-between;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NumberStars = styled.Text`
  font-size: 25px;
  color: white;
  font-family: ${fonts.Light};
  margin-left: 5px;
`;

export const LocksContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 55px;
  justify-content: space-between;
`;

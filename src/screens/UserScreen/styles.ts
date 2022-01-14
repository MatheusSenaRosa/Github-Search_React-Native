import fonts from "@shared/fonts/index";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Header = styled.View`
  height: 160px;
  background-color: #1f1f1f;
  padding: 0 15px;
  padding-top: ${getStatusBarHeight() + 20}px;
`;

export const TopView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UsernameText = styled.Text`
  font-family: ${fonts.Bold};
  font-size: 20px;
  color: white;
`;

export const ExitButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ExitText = styled.Text`
  color: white;
  font-family: ${fonts.Regular};
  font-size: 20px;
`;

export const PictureContainer = styled.View`
  top: 95px;
  left: 36%;
  position: absolute;
  height: 130px;
  border: 3px solid white;
  width: 130px;
  border-radius: 80px;
  overflow: hidden;
  background-color: #383838;
`;

export const UserPicture = styled.Image`
  height: 100%;
`;

export const Body = styled.View`
  flex: 1;
  padding-top: 75px;
`;

export const NumericDataContainer = styled.View`
  background-color: #383838;
  height: 110px;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
`;

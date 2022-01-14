import fonts from "@shared/fonts/index";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  flex-direction: row;
`;

export const ButtonArea = styled.View`
  width: 25%;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text<{ active?: boolean }>`
  font-family: ${fonts.Medium};
  font-size: 16px;
  color: ${({ active }) => (active ? "black" : "gray")};
`;

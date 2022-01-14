import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Title,
  BottomContainer,
  StarContainer,
  Description,
  NumberStars,
  LocksContainer,
} from "./styles";

import YellowItem from "../YellowItem";

type Props = {
  name: string;
  description: string;
  stars: number;
};

const ItemListRepos = ({ name, description, stars }: Props) => {
  return (
    <Container>
      <YellowItem top={18} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <BottomContainer>
        <StarContainer>
          <Feather name="star" size={24} color="#ffce00" />
          <NumberStars>{stars}</NumberStars>
        </StarContainer>
        <LocksContainer>
          <Feather name="unlock" size={24} color="#008000" />
          <Feather name="lock" size={24} color="#fc0000" />
        </LocksContainer>
      </BottomContainer>
    </Container>
  );
};

export default ItemListRepos;

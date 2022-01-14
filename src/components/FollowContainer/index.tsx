import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native";

import { Container, Number, Title } from "./styles";

type Props = {
  title: string;
  number: number;
};

const FollowContainer = ({ number, title }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback onPress={() => navigation.navigate(title)}>
      <Container>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </Container>
    </TouchableNativeFeedback>
  );
};

export default FollowContainer;

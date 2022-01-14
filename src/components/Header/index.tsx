import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Container, Title } from "./styles";
import { TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View>
          <AntDesign name="arrowleft" size={25} color="white" />
        </View>
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

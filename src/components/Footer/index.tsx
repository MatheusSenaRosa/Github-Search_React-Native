import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonArea, Container, TextButton } from "./styles";

type Props = {
  pageActive: "home" | "repos" | "followers" | "following";
};

const Footer = ({ pageActive }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Home")}>
        <ButtonArea>
          <Feather
            name="home"
            size={30}
            color={pageActive === "home" ? "black" : "gray"}
          />
          <TextButton active={pageActive === "home"}>Home</TextButton>
        </ButtonArea>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Repos")}>
        <ButtonArea>
          <Feather
            name="github"
            size={30}
            color={pageActive === "repos" ? "black" : "gray"}
          />
          <TextButton active={pageActive === "repos"}>Repos</TextButton>
        </ButtonArea>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Followers")}>
        <ButtonArea>
          <Feather
            name="users"
            size={30}
            color={pageActive === "followers" ? "black" : "gray"}
          />
          <TextButton active={pageActive === "followers"}>Followers</TextButton>
        </ButtonArea>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => navigation.navigate("Following")}>
        <ButtonArea>
          <Feather
            name="users"
            size={30}
            color={pageActive === "following" ? "black" : "gray"}
          />
          <TextButton active={pageActive === "following"}>Following</TextButton>
        </ButtonArea>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default Footer;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  ImageContainer,
  LeftContainer,
  Picture,
  Title,
} from "./styles";

import YellowItem from "../YellowItem";
import getUserConfig from "@shared/services/endpoints/getUserConfig";
import * as userActions from "@store/actions/user";

type Props = {
  imageUrl: string;
  name: string;
  setLoading: (value: boolean) => void;
};

const ItemListFollow = ({ imageUrl, name, setLoading }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRedirectHandler = async () => {
    const response = await getUserConfig(name, setLoading);

    if (response) {
      dispatch(userActions.setUser(response));
      navigation.dispatch(StackActions.replace("Home"));
    }
  };

  return (
    <Container>
      <YellowItem top={"29%"} />
      <LeftContainer>
        <ImageContainer>
          <Picture
            source={{
              uri: imageUrl,
            }}
          />
        </ImageContainer>
        <Title>{name}</Title>
      </LeftContainer>
      <TouchableOpacity onPress={onRedirectHandler}>
        <AntDesign name="arrowright" size={30} color="white" />
      </TouchableOpacity>
    </Container>
  );
};

export default ItemListFollow;

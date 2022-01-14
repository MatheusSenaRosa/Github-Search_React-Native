import React, { useState } from "react";
import { ActivityIndicator, TouchableNativeFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";

import {
  Container,
  NameInput,
  SearchButton,
  TextButton,
  TouchableButton,
} from "./styles";

import { Background } from "@components/index";
import * as userActions from "@store/actions/user";
import getUserConfig from "@shared/services/endpoints/getUserConfig";

const SearchScreen = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSearchHandler = async () => {
    const response = await getUserConfig(username, setLoading);

    if (response) {
      dispatch(userActions.setUser(response));
      navigation.dispatch(StackActions.replace("Home"));
    }
  };

  return (
    <Background keyboardDismiss={true}>
      <Container>
        <AntDesign name="github" size={120} color="#ffa100" />
        <NameInput placeholder="Username" onChangeText={setUsername} />
        <TouchableButton>
          <TouchableNativeFeedback onPress={onSearchHandler}>
            <SearchButton>
              {!loading && (
                <>
                  <TextButton>Search</TextButton>
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color="#292929"
                    style={{ marginLeft: 5, marginTop: 3 }}
                  />
                </>
              )}
              {loading && <ActivityIndicator color={"#292929"} size={20} />}
            </SearchButton>
          </TouchableNativeFeedback>
        </TouchableButton>
      </Container>
    </Background>
  );
};

export default SearchScreen;

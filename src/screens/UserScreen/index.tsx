import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";

import { userData } from "@store/actions/user";
import * as userActions from "@store/actions/user";

import {
  Body,
  ExitButton,
  ExitText,
  Header,
  NumericDataContainer,
  PictureContainer,
  TopView,
  UsernameText,
  UserPicture,
} from "./styles";

import {
  Background,
  DescriptionContainer,
  FollowContainer,
  Footer,
} from "@components/index";

const UserScreen = () => {
  const userData = useSelector((reducer: { user: userData }) => reducer.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onExitHandler = () => {
    dispatch(userActions.clearUser());
    navigation.dispatch(StackActions.replace("Search"));
  };

  return (
    <Background keyboardDismiss={false}>
      <Header>
        <TopView>
          <UsernameText>#{userData.login}</UsernameText>
          <ExitButton onPress={onExitHandler}>
            <ExitText>Exit</ExitText>
            <Ionicons
              name="exit-outline"
              size={24}
              color="#ba3131"
              style={{ marginLeft: 8, marginTop: 3 }}
            />
          </ExitButton>
        </TopView>
        <PictureContainer>
          {!!userData.avatar_url && (
            <UserPicture
              resizeMode="center"
              source={{
                uri: userData.avatar_url,
              }}
            />
          )}
        </PictureContainer>
      </Header>

      <Body>
        <DescriptionContainer
          title={userData.name || "Empty name"}
          email={userData.blog || "Empty email"}
          address={userData.location || "Empty location"}
        />

        <NumericDataContainer>
          <FollowContainer title="Followers" number={userData.followers} />
          <FollowContainer title="Following" number={userData.following} />
          <FollowContainer title="Repos" number={userData.public_repos} />
        </NumericDataContainer>

        <DescriptionContainer
          title="BIO"
          description={userData.bio || "Empty bio"}
        />
      </Body>
      <Footer pageActive="home" />
    </Background>
  );
};

export default UserScreen;

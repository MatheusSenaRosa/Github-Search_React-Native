import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ListContainer } from "./styles";

import {
  Background,
  Header,
  Footer,
  ItemListFollow,
  ListDivider,
} from "@components/index";

import getFollowersConfig from "@shared/services/endpoints/getFollowersConfig";

type FollowersData = {
  id: number;
  avatar_url: string;
  login: string;
};

const FollowersScreen = () => {
  const [loading, setLoading] = useState(false);
  const [followersData, setFollowersData] = useState<FollowersData[]>(
    [] as FollowersData[]
  );
  const login = useSelector(
    (reducer: { user: { login: string } }) => reducer.user.login
  );

  useEffect(() => {
    const getFollowers = async () => {
      setLoading(true);
      setFollowersData(await getFollowersConfig(login));
      setLoading(false);
    };
    getFollowers();
  }, []);

  return (
    <Background keyboardDismiss={false}>
      <Header title="Followers" />
      <ListContainer>
        {loading && <ActivityIndicator color={"#ffce00"} size={50} />}
        {!loading && (
          <FlatList
            ItemSeparatorComponent={() => <ListDivider />}
            data={followersData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ItemListFollow
                imageUrl={item.avatar_url}
                name={item.login}
                setLoading={setLoading}
              />
            )}
          />
        )}
      </ListContainer>
      <Footer pageActive="followers" />
    </Background>
  );
};

export default FollowersScreen;

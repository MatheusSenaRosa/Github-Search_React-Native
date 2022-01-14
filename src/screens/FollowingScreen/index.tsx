import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { ListContainer } from "./styles";

import {
  Background,
  Header,
  Footer,
  ListDivider,
  ItemListFollow,
} from "@components/index";

import getFollowingConfig from "@shared/services/endpoints/getFollowingConfig";

type FollowingData = {
  id: number;
  login: string;
  avatar_url: string;
};

const FollowingScreen = () => {
  const [loading, setLoading] = useState(false);
  const [followingData, setFollowingData] = useState<FollowingData[]>(
    [] as FollowingData[]
  );
  const login = useSelector(
    (reducer: { user: { login: string } }) => reducer.user.login
  );

  useEffect(() => {
    const getFollowers = async () => {
      setLoading(true);
      setFollowingData(await getFollowingConfig(login));
      setLoading(false);
    };
    getFollowers();
  }, []);

  return (
    <Background keyboardDismiss={false}>
      <Header title="Following" />
      <ListContainer>
        {loading && <ActivityIndicator color={"#ffce00"} size={50} />}
        {!loading && (
          <FlatList
            ItemSeparatorComponent={() => <ListDivider />}
            data={followingData}
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
      <Footer pageActive="following" />
    </Background>
  );
};

export default FollowingScreen;

import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import { ListContainer } from "./styles";

import {
  Background,
  Header,
  Footer,
  ItemListRepos,
  ListDivider,
} from "@components/index";

import getReposConfig from "@shared/services/endpoints/getReposConfig";

type Repos = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};

const ReposScreen = () => {
  const [repos, setRepos] = useState<Repos[]>([] as Repos[]);
  const [loading, setLoading] = useState(false);
  const login = useSelector(
    (reducer: { user: { login: string } }) => reducer.user.login
  );

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      setRepos(await getReposConfig(login));
      setLoading(false);
    };
    getRepos();
  }, []);

  return (
    <Background keyboardDismiss={false}>
      <Header title="Repositories" />
      <ListContainer>
        {loading && <ActivityIndicator color={"#ffce00"} size={50} />}
        {!loading && (
          <FlatList
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item }) => (
              <ItemListRepos
                name={item.name}
                description={item.description}
                stars={item.stargazers_count}
              />
            )}
          />
        )}
      </ListContainer>
      <Footer pageActive="repos" />
    </Background>
  );
};

export default ReposScreen;

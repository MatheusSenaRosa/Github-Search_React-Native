import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SearchScreen,
  UserScreen,
  ReposScreen,
  FollowersScreen,
  FollowingScreen,
} from "@screens/index";

const AppRoutes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Search" component={SearchScreen} />
      <Screen name="Home" component={UserScreen} />
      <Screen name="Repos" component={ReposScreen} />
      <Screen name="Followers" component={FollowersScreen} />
      <Screen name="Following" component={FollowingScreen} />
    </Navigator>
  );
};

export default AppRoutes;

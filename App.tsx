import React from "react";
import { combineReducers, createStore } from "redux";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import userReducer from "./src/store/reducers/user";
import Routes from "./src/routes/index";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

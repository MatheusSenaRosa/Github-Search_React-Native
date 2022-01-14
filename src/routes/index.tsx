import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes.routes";

const Routes = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <AppRoutes />
  </NavigationContainer>
);

export default Routes;

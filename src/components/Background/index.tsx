import React, { ReactNode } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

import { Container } from "./styles";

type Props = TouchableWithoutFeedbackProps & {
  children: ReactNode;
  keyboardDismiss: boolean;
};

const Background = ({ keyboardDismiss, children }: Props) => {
  return (
    <>
      {keyboardDismiss && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>{children}</Container>
        </TouchableWithoutFeedback>
      )}
      {!keyboardDismiss && <Container>{children}</Container>}
    </>
  );
};

export default Background;

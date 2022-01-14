import React from "react";

import { Container } from "./styles";

type Props = {
  top?: number | string;
};

const YellowItem = ({ top }: Props) => {
  return <Container style={{ top: top }} />;
};

export default YellowItem;

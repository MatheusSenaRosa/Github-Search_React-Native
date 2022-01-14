import React from "react";

import { Container, DescriptionText, TitleText } from "./styles";

import YellowItem from "../YellowItem";

type Props = {
  title: string;
  email?: string;
  address?: string;
  description?: string;
};

const DescriptionContainer = ({
  title,
  email,
  address,
  description,
}: Props) => {
  return (
    <Container>
      <YellowItem />
      {title && <TitleText>{title}</TitleText>}
      {email && <DescriptionText>{email}</DescriptionText>}
      {address && <DescriptionText>{address}</DescriptionText>}
      {description && <DescriptionText>{description}</DescriptionText>}
    </Container>
  );
};

export default DescriptionContainer;

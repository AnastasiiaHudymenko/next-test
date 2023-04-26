import styled from "styled-components";
import { FC } from "react";
import { type } from "os";

type headingPropsType = {
  text: string;
};

export const Heading: FC<headingPropsType> = ({ text }) => {
  return <Title>{text}</Title>;
};

const Title = styled.h1`
  font-size: 20px;
`;

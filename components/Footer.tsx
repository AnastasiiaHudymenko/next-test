import { FC } from "react";
import styled from "styled-components";
import { Heading } from "./Heading";

export const Footer: FC = () => {
  return (
    <Container>
      <Heading text="By developer Anastasiia Gudymenko" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
`;

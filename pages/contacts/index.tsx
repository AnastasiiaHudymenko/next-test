import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { GetStaticProps } from "next";
import { Heading } from "../../components/Heading";
import { contactType } from "../../types";
import styled from "styled-components";

type contactsProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) return { notFound: true };

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsProps> = ({ contacts }) => {
  return (
    <Container>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts List:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => {
            return (
              <li key={id}>
                <Link href={`/contacts/${id}`}>
                  <p>
                    {name}: <span>({email})</span>
                  </p>
                </Link>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
`;

export default Contacts;

import { GetServerSideProps } from "next";
import { FC } from "react";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { contactType } from "../../types";

type contactProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) return { notFound: true };

  return {
    props: { contact: data },
  };
};

const Contact: FC<contactProps> = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </div>
  );
};
export default Contact;

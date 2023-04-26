import { FC } from "react";
import { Heading } from "./Heading";
import { contactType } from "../types";

type contactInfoProps = {
  contact: contactType;
};

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city } = address || {};
  if (!contact) {
    return <Heading text="Contact is empty" />;
  }

  return (
    <>
      <Heading text={name} />
      <div>
        <strong>Email: {email}</strong>
      </div>
      <div>
        <strong>Adress: {`${street}, ${suite}, ${city}`}</strong>
      </div>
    </>
  );
};

export default ContactInfo;

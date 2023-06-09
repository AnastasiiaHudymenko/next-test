import { type } from "os";

export type addressType = {
  street: string;
  suite: string;
  city: string;
};

export type contactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type postType = {
  title: string;
  body: string;
};

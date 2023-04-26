import { FC } from "react";
import { Heading } from "./Heading";
import { postType } from "../types";

type postProps = {
  post: postType;
};

const PostInfo: FC<postProps> = ({ post }) => {
  const { title, body } = post || {};

  return (
    <>
      <Heading text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;

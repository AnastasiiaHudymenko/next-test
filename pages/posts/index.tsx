import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Heading } from "../../components/Heading";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) return { notFound: true };

  return {
    props: { posts: data },
  };
};

const PostsPage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <ul>
        {posts &&
          posts.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <Heading text={title} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PostsPage;

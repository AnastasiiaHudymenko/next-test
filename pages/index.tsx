import { Heading } from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.API_HOST}/social`);
    const data = await res.json();

    if (!data) return { notFound: true };
    return {
      props: { socials: data },
    };
  } catch (error) {
    return {
      props: { socials: null },
    };
  }
};
const HomePage = ({ socials }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text=" Welcome to Next" />
      <Socials socials={socials} />
    </div>
  );
};

export default HomePage;

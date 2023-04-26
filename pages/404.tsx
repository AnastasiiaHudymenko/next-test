import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Heading } from "../components/Heading";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />

      <p>Somthing going wrong...</p>
    </div>
  );
};

export default ErrorPage;

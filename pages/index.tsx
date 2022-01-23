import Benefits from "components/Home/Benefits";
import Collections from "components/Home/Collections";
import VideoBanner from "components/Home/VideoBanner";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-[300vh]">
      <Head>
        <title>Commerce</title>
        <meta name="description" content="An ecommerce shop website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoBanner />
      <div className="mx-auto max-w-[74rem] px-3">
        <Benefits />
        <Collections />
      </div>
    </div>
  );
};

export default Home;

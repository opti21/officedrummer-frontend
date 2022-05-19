import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Office Drummer song panel</title>
        <meta
          name="description"
          content="Song panel for Officedrummer on twitch"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        {!session ? (
          <button
            onClick={() => signIn("twitch")}
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            Login
          </button>
        ) : (
          <>
            <button
              onClick={() => signOut()}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Logout
            </button>
            <div>{session.user?.name}</div>
          </>
        )}
        <h1 className="text-3xl font-bold underline">
          Office Drummer Song Panel
        </h1>
      </div>
    </div>
  );
};

export default Home;

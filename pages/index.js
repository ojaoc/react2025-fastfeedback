import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>

        <p className={styles.description}>{auth?.user?.email}</p>

        <button onClick={() => auth.signInWithGithub()}>Sign in</button>
        {auth?.user && <button onClick={() => auth.signout()}>Sign out</button>}
      </main>
    </div>
  );
}

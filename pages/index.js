import React from 'react';
import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Button, Code, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading fontWeight="bold">Fast Feedback</Heading>

        {auth?.user && (
          <Text>
            Current user: <Code>{auth?.user?.email}</Code>
          </Text>
        )}

        <Button onClick={() => auth.signInWithGitHub()}>Sign in</Button>
        {auth?.user && <Button onClick={() => auth.signout()}>Sign out</Button>}
      </main>
    </div>
  );
}

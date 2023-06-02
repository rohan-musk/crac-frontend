import Head from 'next/head';
import HomeLayout from '@components/layouts/HomeLayout/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Activities Club</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>
          <HomeLayout />
        </div>
      </main>
    </>
  );
}

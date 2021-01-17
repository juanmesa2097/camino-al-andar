import Head from "next/head";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{process.env.appName} - Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main></main>
    </div>
  );
}

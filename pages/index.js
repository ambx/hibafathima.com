import Head from "next/head";
import Title from "../components/Title";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hiba Fathima</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <Navbar />
    </div>
  );
}

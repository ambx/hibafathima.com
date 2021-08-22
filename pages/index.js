import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hiba Fathima</title>
      </Head>

      <Header />
      {/* <About /> */}
    </div>
  );
}

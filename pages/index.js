import Head from "next/head";
import { Footer, Hero, NavBar, Recipes } from "./components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RecipeApp</title>
        <meta name="description" content="Front End Example - Camilo Romero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar isHeader={true} />
      <section className={styles.content}>
        <Hero />
        <NavBar isHeader={false} />
        <Recipes />
      </section>
      <Footer />
    </div>
  );
}

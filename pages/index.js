import { FooterPage } from "@/src/components/footer/footer-page";
import { HeaderPage } from "@/src/components/header/header-page";
import { HomePage } from "@/src/components/home/home-page";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>events app</title>
      </Head>
      <HomePage data={data}></HomePage>
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}

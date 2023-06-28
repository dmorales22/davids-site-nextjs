import "@/styles/globals.css";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Dave's Portfolio Website",
  description:
    "This is my portfolio website. I hope you guys find it interesting and insightful.",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="logo.png" type="image/png" sizes={"32x32"}/>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Component {...pageProps} />{" "}
    </>
  );
}

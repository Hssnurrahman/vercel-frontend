import Head from "next/head";
import React from "react";
import ImportProject from "../../../../components/ImportProject";

const ImportProjectPage = () => {
  return (
    <div>
      <Head>
        <title>Import Project - Vercel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImportProject />
    </div>
  );
};

export default ImportProjectPage;
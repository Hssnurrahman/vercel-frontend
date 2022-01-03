import Head from "next/head";
import React from "react";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>SignUp - Vercel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SignUp />
    </div>
  );
};

export default SignUpPage;

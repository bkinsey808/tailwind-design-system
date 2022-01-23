import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import vercelPic from "../public/vercel.svg";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image src={vercelPic} alt="vercel" width="283" height="64" />
      <div className="about-our-company-fill">this is a test</div>
    </div>
  );
};

export default Home;

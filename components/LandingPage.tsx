import { FC } from "react";
// import Image from "next/image";
// import vercelPic from "../public/vercel.svg";

import Section from "./Section";

const LandingPage: FC<{ preview: boolean; page: any }> = ({
  preview,
  page,
}) => {
  console.log({ preview, page });
  return (
    <div>
      {page?.sections?.map((section: any, index: number) => (
        <Section key={index} section={section} />
      ))}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image src={vercelPic} alt="vercel" width="283" height="64" /> */}
    </div>
  );
};

export default LandingPage;

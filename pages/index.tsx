import type { GetStaticProps, NextPage } from "next";

import LandingPage from "../components/LandingPage";
import { fetchXDLandingEntriesBySlug } from "../lib/api";

const Home: NextPage<{ preview: boolean; page: any }> = ({ preview, page }) => {
  return <LandingPage preview={preview} page={page} />;
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const homePage = await fetchXDLandingEntriesBySlug(preview);
  return {
    props: {
      preview: preview,
      page: homePage[0].fields,
    },
  };
};

export default Home;

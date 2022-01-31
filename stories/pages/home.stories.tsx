import Home, { getStaticProps } from "../../pages/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args: any, staticProps: any) => {
  console.log({ staticProps });
  return (
    <Home
      {...args}
      preview={staticProps.loaded.props.preview}
      page={staticProps.loaded.props.page}
    />
  );
};
HomePage.loaders = [async () => await getStaticProps({})];

import { ComponentType, FC } from "react";

import dynamic from "next/dynamic";

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const Section: FC<{ section: any }> = ({ section }) => {
  const sectionType = section?.sys?.contentType?.sys?.id;

  const SectionComponent: ComponentType<{ section: any }> = dynamic(
    () =>
      import(`./sections/${capitalizeFirstLetter(sectionType)}`)
        .then((result) => Promise.resolve(result))
        .catch((err) => {
          console.error(err);
        }),
    {}
  );

  return <SectionComponent section={section} />;
};

export default Section;

import { FC } from "react";

const XdHeader: FC<{ section: any }> = ({ section }) => {
  const navigationItems = section?.fields?.navigation?.fields?.navigationItems;
  const logo = section?.fields?.logo;
  console.log({ logo });
  return (
    <div>
      {navigationItems?.map((navigationItem: any, index: number) => (
        <div key={index}>{navigationItem.fields.label}</div>
      ))}
    </div>
  );
};

export default XdHeader;

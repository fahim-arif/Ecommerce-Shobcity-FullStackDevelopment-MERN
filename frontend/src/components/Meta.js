import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome to ShobCity",
  description: "we sell best product for cheap",
  keywords: "electronics, chip electronics",
};
export default Meta;

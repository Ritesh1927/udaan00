import React from "react";
import { Helmet } from "react-helmet-async";

// Classical props usage
const Seo = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default Seo;

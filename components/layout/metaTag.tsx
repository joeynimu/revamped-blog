import React from "react";
import Head from "next/head";

interface Props {
  pageTitle?: string;
  description?: string;
}
const MetaTag = ({
  pageTitle = "Javascript Engineer",
  description = "about Joe",
}: Props) => {
  return (
    <Head>
      <title>Joe Ng&apos;ethe - {pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTag;

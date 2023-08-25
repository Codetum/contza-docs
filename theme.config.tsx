import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Contza Docs</span>,
  project: {
    link: "https://github.com/Codetum/contza",
  },
  chat: {
    link: "https://discord.gg/hTVDUjgNfW",
  },
  docsRepositoryBase: "https://github.com/Codetum/contza-docs/tree/main",
  footer: {
    text: "Contza.com - Documentation",
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s - Contza",
  }),
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title ?? "Contza Documentation"} />
        <meta
          property="og:description"
          content={frontMatter.description ?? "Contza Documentation"}
        />
      </>
    );
  },
};

export default config;

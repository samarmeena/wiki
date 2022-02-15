// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Indian Ocean Roleplay™ - Wiki",
  tagline: "Documentation",
  url: "https://wiki.iorp.in",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "oceanroleplay", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/oceanroleplay/wiki",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Indian Ocean Roleplay™",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/oceanroleplay/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Download and Install SAMP + Register Account?",
                to: "https://forum.iorp.in/topic/3/download-gta-sa-and-samp-indian-ocean-roleplay",
              },
              {
                label: "How to get verified on discord?",
                to: "https://forum.iorp.in/topic/283/how-to-verify-forum-account-on-discord",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Indian Ocean Roleplay™",
                href: "https://iorp.in",
              },
              {
                label: "Discord",
                href: "https://discord.gg/Xq9k3hr",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Forum",
                href: "https://forum.iorp.in",
              },
              {
                label: "GitHub",
                href: "https://github.com/oceanroleplay",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Indian Ocean Roleplay™`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

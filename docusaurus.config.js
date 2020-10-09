module.exports = {
  title: 'Indian Ocean Roleplay™ - WIKI',
  tagline: 'documentation for SA-MP and IORP™',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'oceanroleplay', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Indian Ocean Roleplay™',
      logo: {
        alt: 'Indian Ocean Roleplay™',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs', position: 'left'
        },
        // { to: 'blog', label: 'Blog', position: 'right'    },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Download and Install SAMP + Register Account?',
              to: 'https://forum.iorp.in/topic/3/download-gta-sa-and-samp-indian-ocean-roleplay',
            },
            {
              label: 'How to get verified on discord?',
              to: 'https://forum.iorp.in/topic/283/how-to-verify-forum-account-on-discord',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Indian Ocean Roleplay™',
              href: 'https://iorp.in',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Xq9k3hr',
            },
            {
              label: 'Forum',
              href: 'https://forum.iorp.in',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/oceanroleplay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Indian Ocean Roleplay™`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

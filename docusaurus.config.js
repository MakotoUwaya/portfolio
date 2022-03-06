// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Makoto Uwaya Portfolio',
  url: 'https://makotouwaya.github.io',
  baseUrl: '/portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/floppy.svg',
  organizationName: 'MakotoUwaya',
  projectName: 'portfolio',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MakotoUwaya/portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MakotoUwaya/portfolio/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-WQFQWCBZT4',
          anonymizeIP: false
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Makoto Uwaya Portfolio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/floppy.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/MakotoUwaya/portfolio',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/m_uwaya',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MakotoUwaya',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Makoto Uwaya. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '9T4LPWYGEG',
        apiKey: '9adb9b34c8fc37c86bbafa2e5dba7871',
        indexName: 'portfolio'
      }
    }),
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  }
};

module.exports = config;

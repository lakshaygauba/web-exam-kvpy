// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'https://icdn.talentbrick.com/main/icons/logo.svg',
            color: '#2196f2',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'https://icdn.talentbrick.com/main/icons/apple-touch-icon.png',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#2196f2',
          },
        ],
      },
    ],
  ],
  title: 'KVPY@TalentBrick',
  tagline: 'Prepare for Kishore Vaigyanik Protsahan Yojana at a glance with TalentBrick open-source education model.',
  url: 'https://kvpy.talentbrick.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'talentbrick', // Usually your GitHub org/user name.
  projectName: 'web-exam-kvpy', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/talentbrick/web-exam-kvpy/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          blogSidebarCount: 0,
          feedOptions: {
            type: null,
            copyright: `Copyright © ${new Date().getFullYear()} | Talent Brick | All Rights Reserved`,
          },
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/talentbrick/web-exam-kvpy/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      hideableSidebar: true,
      navbar: {
        title: 'KVPY@TalentBrick',
        hideOnScroll: true,
        logo: {
          alt: 'TalentBrick KVPY Preparation',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/talentbrick/web-exam-kvpy',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Start Learning',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://ask.talentbrick.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/pqSDdW3tuM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/talentbrick',
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
                href: 'https://github.com/talentbrick/web-exam-kvpy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} · <a href="https://www.talentbrick.com/" alt="TalentBrick">Talent Brick</a> · All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const { execSync } = require('node:child_process')

const branch = execSync('git rev-parse --abbrev-ref HEAD', {
  encoding: 'utf8',
}).trim()
const organization = 'PocketMineDevelopersJP'
const repository = 'Guide'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'server.mcbe.jp',
  tagline: 'Minecraft Bedrock Edition の日本コミュニティ',
  url: 'https://server.mcbe.jp',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: organization,
  projectName: repository,

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity'),
        editUrl: `https://github.com/${organization}/${repository}/tree/${branch}`,
        showLastUpdateTime: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebarsDocs.js'),
          editUrl: `https://github.com/${organization}/${repository}/tree/${branch}`,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${organization}/${repository}/tree/${branch}`,
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
      navbar: {
        title: 'server.mcbe.jp',
        logo: {
          alt: 'server.mcbe.jp Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'コミュニティ',
            to: '/community/intro',
            position: 'left',
          },
          { to: '/blog', label: 'ブログ', position: 'left' },
          {
            href: 'https://github.com/PocketMineDevelopersJP/Guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/U9SJAHU',
              },
              {
                label: 'Forum',
                href: 'https://forum.mcbe.jp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PocketMineDevelopersJP',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} server.mcbe.jp. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config

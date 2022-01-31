module.exports = {
  lang: 'ja-JP',
  title: 'server.mcbe.jp',
  description:
    'Minecraft:BedrockEdition(統合版)向けの、PocketMine-MP等のサーバーソフトウェアのプラグイン開発者向けコミュニティです。',
  head: [
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:title', content: 'server.mcbe.jp' }],
    ['meta', { name: 'og:url', content: 'https://server.mcbe.jp' }],
    ['meta', { name: 'og:image', content: 'https://server.mcbe.jp/icon.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'ja_JP' }],
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'server.mcbe.jp',
      description:
        'Minecraft:BedrockEdition(統合版)向けの、PocketMine-MP等のサーバーソフトウェアのプラグイン開発者向けコミュニティです。',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'server.mcbe.jp',
      description:
        'A plugin developer community for server software such as PocketMine-MP for Minecraft: BedrockEdition.',
    },
  },
  themeConfig: {
    logo: '/icon.png',
    repo: 'PocketMineDevelopersJP/Guide',
    docsRepo: 'PocketMineDevelopersJP/Guide',
    repoLabel: 'GitHub',
    docsBranch: 'master',
    docsDir: 'source',
    editLinks: true,
    locales: {
      '/': {
        selectLanguageName: '日本語',
        selectLanguageText: '言語',
        editLinkText: 'GitHubでこのページを編集',
        lastUpdatedText: '最終更新日',
        contributorsText: '貢献者',
        navbar: require('./nav/ja-JP/nav'),
      },
      '/en-US/': {
        selectLanguageName: 'English',
        navbar: require('./nav/en-US/nav'),
      },
    },
  },
}

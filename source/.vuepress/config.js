module.exports = {
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'PocketMine,PocketMine-MP,PMMP,php,discord' }],
    ['meta', { name: 'author', content: 'InkoHX' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'http://server.mcbe.jp' }],
    ['meta', { name: 'twitter:image', content: 'http://server.mcbe.jp/icon.png' }],
    ['meta', { name: 'twitter:site', content: '@InkoHX' }],
    ['meta', { name: 'twitter:creator', content: '@InkoHX' }],
    ['meta', { name: 'msapplication-TileColor', content: '#bcbcbc' }],
    ['meta', { name: 'theme-color', content: '#bcbcbc' }],
    ['meta', { property: 'og:title', content: 'server.mcbe.jp'}],
    ['meta', { property: 'og:site_name', content: 'server.mcbe.jp'}],
    ['meta', { property: 'og:url', content: 'http://server.mcbe.jp'}],
    ['meta', { property: 'og:image', content: 'http://server.mcbe.jp/icon.png' }],
    ['meta', { property: 'og:type', content: 'site' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'http://server.mcbe.jp/icon.png' }]
  ],
  locales: {
    "/": {
      lang: "ja-JP",
      title: "server.mcbe.jp",
      description:
        "Minecraft:BedrockEdition(統合版)向けの、PocketMine-MP等のサーバーソフトウェアのプラグイン開発者向けコミュニティです。"
    },
    "/en-US/": {
      lang: "en-US",
      title: "server.mcbe.jp",
      description: "..."
    }
  },
  themeConfig: {
    repo: "PocketMineDevelopersJP/Guide",
    docsDir: "source",
    editLinks: true,
    locales: {
      "/": {
        label: "日本語",
        selectText: "Languages",
        editLinkText: "GitHubでこのページを編集する。",
        lastUpdated: "最終更新日",
        nav: require("./nav/ja-JP/nav"),
        sidebar: {
          '/guide/': require('./sidebar/community')('ガイド')
        }
      },
      "/en-US/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en-US/nav"),
        sidebar: {}
      }
    }
  }
};

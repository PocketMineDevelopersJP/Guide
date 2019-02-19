module.exports = {
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

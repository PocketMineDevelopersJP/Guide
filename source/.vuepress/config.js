module.exports = {
  head: [
    ["meta", { charset: "utf-8" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "og:title", content: "server.mcbe.jp" }],
    ["meta", { name: "og:url", content: "http://server.mcbe.jp" }],
    ["meta", { name: "og:image", content: "http://server.mcbe.jp/icon.png" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "ja_JP" }],
    ["link", { rel: "icon", href: "http://server.mcbe.jp/icon.png" }]
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
    docsRepo: "PocketMineDevelopersJP/Guide",
    repoLabel: "GitHub",
    docsBranch: "master",
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
          "/guide/": require("./sidebar/community")("ガイド")
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

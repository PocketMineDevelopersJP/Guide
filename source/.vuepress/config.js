module.exports = {
  locales: {
    "/": {
      lang: "ja-JP",
      title: "discord.mcbe.jp",
      description:
        "Minecraft:BedrockEdition(統合版)向けの、PocketMine-MP等のサーバーソフトウェアのプラグイン開発者向けコミュニティです。"
    },
    "/en-US/": {
      lang: "en-US",
      title: "discord.mcbe.jp",
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
        sidebar: {}
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
  },
  plugins: [
    [
      "@limdongjin/vuepress-plugin-simple-seo",
      {
        root_url: "https://discord.mcbe.jp",
        default_site_name: "discord.mcbe.jp"
      }
    ]
  ]
};

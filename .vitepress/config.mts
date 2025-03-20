import { defineConfig } from "vitepress";
import { default as config } from "../src/configs/config.json";
import { RssPlugin } from "vitepress-plugin-rss";
import type { RSSOptions } from "vitepress-plugin-rss";

// RSS feed configuration
const RSS: RSSOptions = {
  title: config.title,
  baseUrl: config.link,
  copyright: "采用 CC BY-NC-ND 4.0 授权",
  description: config.desc,
  filename: "feed.rss",
  log: true,
  ignoreHome: true,
  ignorePublish: false,
  renderExpect: (fileContent, frontmatter) => {
    // The logic for generating an article abstract, such as returning the first 140 characters
    const excerpt = fileContent;
    return excerpt;
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: config.title,
  description: config.desc,
  vite: {
    plugins: [RssPlugin(RSS)],
  },
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  head: [["link", { rel: "icon", href: config.logo }]],
  themeConfig: {
    logo: config.logo,
    footer: {
      message:
        "Made with ❤️ by <a href='https://github.com/silvaire-qwq/Website'>Silvaire</a>",
      copyright:
        "<a href='https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans'>CC BY-NC-ND 4.0</a>",
    },
    nav: [
      { text: "Moments", link: "/src/pages/moments" },
      { text: "Music", link: "/src/pages/music" },
      { text: "Friends", link: "/src/pages/friends" },
      { text: "About", link: "/src/pages/about" },
    ],
    docFooter: {
      prev: "回忆",
      next: "继续探索",
    },
    aside: true,
    darkModeSwitchLabel: "时钟",
    lightModeSwitchTitle: "切换至白天",
    darkModeSwitchTitle: "切换至夜晚",
    sidebarMenuLabel: "地图",
    outlineTitle: "在此页上",
    returnToTopLabel: "回到重生点",
    socialLinks: [{ icon: "github", link: config.github }],
  },
});

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Nameless CLO',
  tagline: 'Nameless CLO is based on CodeLinaro and inspired by Qualcomm. We offer a smooth, stable, and high-performance experience for your Snapdragon device.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nameless-wiki.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LucyKushinada00', // Usually your GitHub org/user name.
  projectName: 'nameless-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      content: '✨ Nameless is now based on CLO starting from Android 15. New builds for supported devices are coming soon. Stay tuned. <a target="_blank" rel="noopener noreferrer" href="https://t.me/nameless_ophub/599814">Know More</a> ✨',
      isCloseable: false,
    },
    footer: {
      copyright: 'Created with ❤️ by Lucy Kushinada and the Nameless Team',
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'nameless-wiki',
      contextualSearch: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nameless CLO',
      items: [
        { to: '/screenshots', label: 'Screenshots', position: 'left' },
        { to: '/faq', label: 'FAQ', position: 'left' },
        { to: '/category/flash-instructions', label: 'Flash Instructions', position: 'left' },
        {
          href: 'https://github.com/Nameless-AOSP',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

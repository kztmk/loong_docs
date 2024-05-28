import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Loong',
  tagline: 'あなたの作業を徹底効率化',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sns-loong.imakita3gyo.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Imakita Industry', // Usually your GitHub org/user name.
  projectName: 'Loong', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kztmk/loong_docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kztmk/loong_docs/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/poster_landscape.jpg',
    navbar: {
      title: 'Loong',
      logo: {
        alt: 'Loong Logo',
        src: 'img/logoLoong.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'マニュアル',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '使う',
          items: [
            {
              label: 'マニュアル',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '法務情報',
          items: [
            {
              label: '利用規約',
              href: 'https://sns-loong.imakita3gyo.com/ja/terms-and-conditions-ja/',
            },
            {
              label: 'プライバシーポリシー',
              href: 'https://sns-loong.imakita3gyo.com/ja/privacy-policy-ja/',
            },
            {
              label: 'クッキーポリシー',
              href: 'https://sns-loong.imakita3gyo.com/ja/cookie-policy-ja',
            },
            {
              label: '免責事項',
              href: 'https://sns-loong.imakita3gyo.com/ja/disclaimer-ja',
            },
            {
              label: '使用許諾書',
              href: 'https://sns-loong.imakita3gyo.com/ja/end-user-license-agreement-ja/',
            },
          ],
        },
        {
          title: 'こちらもどうぞ',
          items: [
            {
              label: '不具合・新機能追加状況',
              to: 'https://sns-loong.imakita3gyo.com/ja/',
            },
            {
              label: '問合せ',
              href: 'https://sns-loong.imakita3gyo.com/ja/contact/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 今北産業. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

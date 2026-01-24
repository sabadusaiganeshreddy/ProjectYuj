import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SaiGaneshReddy',
  tagline: 'Coding Patterns, ML, System Design, and Research',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sabadusaiganeshreddy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ProjectYuj/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sabadusaiganeshreddy', // Usually your GitHub org/user name.
  projectName: 'ProjectYuj', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'dsa',
        routeBasePath: 'dsa',
        path: './blog-dsa',
        blogTitle: 'DSA Guide',
        blogSidebarTitle: 'Blogs',
        showReadingTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'ml',
        routeBasePath: 'ml',
        path: './blog-ml',
        blogTitle: 'Machine Learning',
        blogSidebarTitle: 'ML Topics',
        showReadingTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'system-design',
        routeBasePath: 'system-design',
        path: './blog-system-design',
        blogTitle: 'System Design',
        blogSidebarTitle: 'Concepts',
        showReadingTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'research',
        routeBasePath: 'research',
        path: './blog-research',
        blogTitle: 'Research Papers',
        blogSidebarTitle: 'Papers',
        showReadingTime: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'SaiGaneshReddy',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {to: '/dsa', label: 'DSA', position: 'left'},
        {to: '/ml', label: 'ML', position: 'left'},
        {to: '/system-design', label: 'System Design', position: 'left'},
        {to: '/research', label: 'Research', position: 'left'},
        {
          href: 'https://github.com/sabadusaiganeshreddy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog Sections',
          items: [
            {
              label: 'DSA',
              to: '/dsa',
            },
            {
              label: 'Machine Learning',
              to: '/ml',
            },
            {
              label: 'System Design',
              to: '/system-design',
            },
            {
              label: 'Research Papers',
              to: '/research',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/saiganeshreddysabadu/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sabadusaiganeshreddy',
            },
            {
              label: 'LeetCode',
              href: 'https://leetcode.com/u/saiganesh_reddy/',
            },
            {
              label: 'Email',
              href: 'mailto:sabadu.sai.reddy@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SaiGaneshReddy. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SCore Documentation',
  tagline: 'Documentation solely for SCore and other Ssomar Plugins',
  favicon: 'assets/score.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Ssomar-Developement.github.io',
  baseUrl: '/SCore-Documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ssomar-Developement', // the GitHub org/user name
  projectName: 'SCore-Documentation',      // the repo name

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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6
    },
    navbar: {
      title: 'SCore Development',
      logo: {
        alt: 'My Site Logo',
        src: '/assets/score.png',
      },
      // ==============================================================================================================================================================
      // 
      // Add new items here if you want to add a dedicated page for other plugins
      // 
      // ==============================================================================================================================================================
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'SCore',
          position: 'left',
          label: 'SCore',
        },
        
        {
          type: 'docSidebar',
          sidebarId: 'ExecutableCrafting',
          position: 'left',
          label: 'ExecutableCrafting',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ExecutableBlocks',
          position: 'left',
          label: 'ExecutableBlocks',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'SCore',
              to: '/docs/score/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java']
      
    },

  } satisfies Preset.ThemeConfig,
};



export default config;

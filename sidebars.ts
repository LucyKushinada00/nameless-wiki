import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        slug: '/getting-started',
      },
      items: [
        'getting-started/supported-devices',
        {
          type: 'category',
          label: 'Downloads',
          link: {
            type: 'generated-index',
            title: 'Downloads',
            slug: 'getting-started/downloads',
          },
          items: [
            {
              type: 'category',
              label: 'OnePlus Devices',
              link: {
                type: 'generated-index',
                title: 'OnePlus Devices',
                slug: 'getting-started/downloads/oneplus',
              },
              items: [
                'getting-started/downloads/oneplus/instantnoodle',
                'getting-started/downloads/oneplus/instantnoodlep',
                'getting-started/downloads/oneplus/kebab',
                'getting-started/downloads/oneplus/lemonade',
                'getting-started/downloads/oneplus/lemonadep',
                'getting-started/downloads/oneplus/lemonades',
                'getting-started/downloads/oneplus/salami',
                'getting-started/downloads/oneplus/waffle',
              ],
            },
            {
              type: 'category',
              label: 'Nothing Devices',
              link: {
                type: 'generated-index',
                title: 'Nothing Devices',
                slug: 'getting-started/downloads/nothing',
              },
              items: [
                'getting-started/downloads/nothing/pong',
              ],
            },
            {
              type: 'category',
              label: 'Legacy Devices (EoL)',
              link: {
                type: 'generated-index',
                title: 'Legacy Devices (EoL)',
                description: 'Legacy Devices are marked as EoL and would no longer recieving updates. No bug reports will be accepted for these devices.',
                slug: 'getting-started/downloads/legacy',
              },
              items: [
                'getting-started/downloads/legacy/martini',
                'getting-started/downloads/legacy/wly',
                'getting-started/downloads/legacy/cupidr',
                'getting-started/downloads/legacy/porsche',
                'getting-started/downloads/legacy/ferrarri',
                'getting-started/downloads/legacy/lunaa',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Flash Instructions',
          link: {
            type: 'generated-index',
            title: 'Flash Instructions',
            slug: 'getting-started/flash-instructions',
          },
          items: [
            {
              type: 'category',
              label: 'OnePlus Devices',
              link: {
                type: 'generated-index',
                title: 'OnePlus Devices',
                slug: 'getting-started/flash-instructions/oneplus',
              },
              items: [
                'getting-started/flash-instructions/oneplus/instantnoodle',
                'getting-started/flash-instructions/oneplus/instantnoodlep',
                'getting-started/flash-instructions/oneplus/kebab',
                'getting-started/flash-instructions/oneplus/lemonade',
                'getting-started/flash-instructions/oneplus/lemonadep',
                'getting-started/flash-instructions/oneplus/lemonades',
                'getting-started/flash-instructions/oneplus/salami',
                'getting-started/flash-instructions/oneplus/waffle',
              ],
            },
            {
              type: 'category',
              label: 'Nothing Devices',
              link: {
                type: 'generated-index',
                title: 'Nothing Devices',
                slug: 'getting-started/flash-instructions/nothing',
              },
              items: [
                'getting-started/flash-instructions/nothing/pong',
              ],
            },
            {
              type: 'category',
              label: 'Legacy Devices (EoL)',
              link: {
                type: 'generated-index',
                title: 'Legacy Devices (EoL)',
                description: 'Legacy Devices are marked as EoL and would no longer recieving updates. No bug reports will be accepted for these devices.',
                slug: 'getting-started/flash-instructions/legacy',
              },
              items: [
                'getting-started/flash-instructions/legacy/cupidr',
              ],
            },
          ],
        }
      ],
    },
    'faq',
    'screenshots',
    'support',
    'about',
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

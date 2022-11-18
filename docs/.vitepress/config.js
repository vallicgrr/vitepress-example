export default {
    title: 'VitePress作ってみた',
    description: 'デフォルト説明文',
    themeConfig: {
        sidebar: {
            '/': [
                {
                  text: 'トップページ',
                  items: [
                    // This shows `/guide/index.md` page.
                    { text: 'Index', link: '/' }, // /guide/index.md
                    { text: '技術', link: '/dev/' }, // /guide/one.md
                    { text: '趣味', link: '/hobby/' } // /guide/two.md
                  ]
                }
              ],
            // This sidebar gets displayed when user is
            // under `guide` directory.
            '/dev/': [
              {
                text: '技術ブログ',
                items: [
                  // This shows `/guide/index.md` page.
                  { text: 'Index', link: '/dev/' }, // /guide/index.md
                  { text: 'dev1 blog', link: '/dev/dev1' }, // /guide/one.md
                  { text: 'dev2 blog', link: '/dev/dev2' } // /guide/two.md
                ]
              }
            ],
      
            // This sidebar gets displayed when user is
            // under `config` directory.
            '/hobby/': [
              {
                text: '趣味',
                items: [
                  // This shows `/config/index.md` page.
                  { text: 'Index', link: '/hobby/' }, // /config/index.md
                  { text: 'hobby1', link: '/hobby/hobby1' }, // /config/three.md
                  { text: 'hobby2', link: '/hobby/hobby2' } // /config/four.md
                ]
              }
            ]
          }
      }
  }
if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let r = {};
    const o = e => n(e, c),
      f = { module: { uri: c }, exports: r, require: o };
    s[c] = Promise.all(i.map(e => f[e] || o(e))).then(e => (a(...e), r));
  };
}
define(['./workbox-1846d813'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/J3rdlKf6oYqTRHemJ0_Qf/_buildManifest.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/J3rdlKf6oYqTRHemJ0_Qf/_middlewareManifest.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/J3rdlKf6oYqTRHemJ0_Qf/_ssgManifest.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/978-f3abfcece87746e3.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/988-d801929c7e64354c.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/framework-5f4595e5518b5600.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/main-eeddfc14d3e84dd7.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-439db3517120179c.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/404-50f293ff74c96b6c.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/_app-5ff6addd61ec7701.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/contact-378e2be448d7ff1c.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/pages/index-95e63c79a7729903.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/chunks/webpack-5752944655d749a0.js',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/_next/static/css/938bfd71f4b4bb64.css',
          revision: 'J3rdlKf6oYqTRHemJ0_Qf'
        },
        {
          url: '/admin/example.css',
          revision: '1fa1c3b068ec26f376bf926125b381d2'
        },
        {
          url: '/admin/index.html',
          revision: 'efbd64c6768fe033efc601f4c56ef108'
        },
        { url: '/arrow-w.svg', revision: '287dfb1931bb0b113aedfc38cfbb0988' },
        { url: '/arrow.svg', revision: '324586938cf550ea16578bf81d11ae94' },
        { url: '/avatar.png', revision: 'b368f42f037b5f8dfe24350009ba620b' },
        {
          url: '/collegeloans.png',
          revision: '8db5d74345e7170a174dfa66efb266d7'
        },
        { url: '/config.yml', revision: 'ff5121f6c763d208415f1b240a13b449' },
        { url: '/emoji.png', revision: 'ee65226f82c4c03e4b70cd5c2b7de09c' },
        {
          url: '/estructura/index.html',
          revision: 'b3e82102d6aa3d3737dc00939ff8cef2'
        },
        {
          url: '/estructura/style.css',
          revision: '37746b8ea340f606cd3c7f75851ca74f'
        },
        { url: '/favicon.ico', revision: '70cbb94accecb456176583e5a9f13fb9' },
        {
          url: '/fonts/PlusJakartaSans-Bold.woff2',
          revision: '965660d6c68800490955ed23e9a2659f'
        },
        {
          url: '/fonts/PlusJakartaSans-Regular.woff2',
          revision: '2faeb737982f9eb144d67f15a9e00226'
        },
        { url: '/garuda.png', revision: '9c9af5aaa1061df2e2e33e3129a684ae' },
        {
          url: '/gastroworld.png',
          revision: 'b34380c66fa2ee2da8b324bf3534fee0'
        },
        { url: '/htv.png', revision: '96866100d1a6e394c2d61e6f6f8ec0fc' },
        {
          url: '/icons/android-icon-144x144.png',
          revision: 'ebdc28d1b759b11269d56984cedff7c6'
        },
        {
          url: '/icons/android-icon-192x192.png',
          revision: '252226a36a722b40bee291676b3695e2'
        },
        {
          url: '/icons/android-icon-36x36.png',
          revision: '620ab65dafb23b25462b365772d8db16'
        },
        {
          url: '/icons/android-icon-48x48.png',
          revision: '487dfc1f80d6ebcc97087720cca4c46e'
        },
        {
          url: '/icons/android-icon-72x72.png',
          revision: 'b8166286088c5fc6d21bdaaab873116f'
        },
        {
          url: '/icons/android-icon-96x96.png',
          revision: 'b48b9a4d10e07c582c1c7baa3c13d887'
        },
        {
          url: '/icons/apple-icon-114x114.png',
          revision: 'bdeb3c999f074bbe48c783c0243f994c'
        },
        {
          url: '/icons/apple-icon-120x120.png',
          revision: '1b1ae394fa47dcc9e9a20105a687256d'
        },
        {
          url: '/icons/apple-icon-144x144.png',
          revision: 'e614475c436d6dee29d46461c4843ee5'
        },
        {
          url: '/icons/apple-icon-152x152.png',
          revision: 'e0d2a382a51ef53418977c89fc55db8d'
        },
        {
          url: '/icons/apple-icon-180x180.png',
          revision: 'f5c5a57ce4606f6ee55a9b087489e170'
        },
        {
          url: '/icons/apple-icon-57x57.png',
          revision: '2a4d716b073f52aa1ddef3de7930c880'
        },
        {
          url: '/icons/apple-icon-60x60.png',
          revision: '142131c2d8324a1f7ea67ff51db5ac15'
        },
        {
          url: '/icons/apple-icon-72x72.png',
          revision: '315e94bf34bcffb660a3f9e7ce4464d5'
        },
        {
          url: '/icons/apple-icon-76x76.png',
          revision: 'e21a42a1a648cbe2e67daa57aa854214'
        },
        {
          url: '/icons/apple-icon-precomposed.png',
          revision: 'bccf95e586d26dfd64c69c3efbe0b47b'
        },
        {
          url: '/icons/apple-icon.png',
          revision: '3b940e586b3160c13485ce250fb8b5a6'
        },
        {
          url: '/icons/favicon-16x16.png',
          revision: 'a43a47a0e6f6ce427b6d9441ae7a4689'
        },
        {
          url: '/icons/favicon-32x32.png',
          revision: 'ce8abed82ed26f18ac27c3c8b4d92a75'
        },
        {
          url: '/icons/favicon-96x96.png',
          revision: '119be263711979388bf0680780ca8baa'
        },
        {
          url: '/icons/ms-icon-144x144.png',
          revision: '2f4ea9662db2ffc0d3ef476aebba39d8'
        },
        {
          url: '/icons/ms-icon-150x150.png',
          revision: '4fa83901b991fe00f70d4d100fa62c31'
        },
        {
          url: '/icons/ms-icon-310x310.png',
          revision: '22e2f973a69505b637f3a21963f28440'
        },
        {
          url: '/icons/ms-icon-70x70.png',
          revision: '369adc6f005447622aed2470965d62b6'
        },
        { url: '/kindlymap.png', revision: '55c5920c96c684fa9824fb20192e9f05' },
        { url: '/mail.svg', revision: 'bf1904b92011f4ae24f9b1473b2ca4b2' },
        { url: '/manifest.json', revision: '7d4e2780bcb54398f721fc1c0dc58121' },
        { url: '/mastery.png', revision: '3989ed4cfa2fd4b63a8f86aa7e490082' },
        {
          url: '/medisearch.png',
          revision: 'da0b0cb174afdf8946b3d39169757951'
        },
        { url: '/mlh.png', revision: '353fe54e454a7c18fedb485d3bdf855f' },
        {
          url: '/modpack/index.html',
          revision: 'f0cc396967fac62bdac610259aa146e7'
        },
        {
          url: '/ram/index.html',
          revision: 'e58e85470d55f3be6fa513e236c6e723'
        },
        { url: '/ram/index.js', revision: '074b56a14705a0f905303591df76586c' },
        {
          url: '/ram/normalize.css',
          revision: 'c893fcee894378d1fe90010322771a8e'
        },
        {
          url: '/ram/skeleton.css',
          revision: '8ace7f2ddb7ec3e5f8683c6a67f49c01'
        },
        { url: '/ram/style.css', revision: '80a48b34514a365eb635d68b8e643514' },
        { url: '/resume.pdf', revision: 'ce6a81a2447eae42925447ef9b6ab6ca' },
        { url: '/robots.txt', revision: '2311e496b7b1c11d56aa30c3c74673a6' },
        { url: '/rss.xml', revision: '238686bfbf0210a5e92b1b81ac108b91' },
        { url: '/s1.svg', revision: 'eac9bee66996f8b0d0a06e6cbd0fdd39' },
        { url: '/s2.svg', revision: '04de2a4bbd7bb13ae7202de4f7203ff9' },
        { url: '/s3.svg', revision: '64b1e26f3ece413e7274eb1dc48d71d1' },
        { url: '/sitemap.xml', revision: 'f8e651cbdd3a83c13735ff7432580373' },
        { url: '/slingshot.png', revision: 'd0af8335c804209e32422d19750cd53f' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    );
});

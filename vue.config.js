module.exports = {
  // set to false to significantly reduce bundle size (multiple megabytes) by not including js.map files
  productionSourceMap: false,

  // fixes https://github.com/graphql/graphql-js/issues/1272
  chainWebpack: (config) => {
    config.module
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },

  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'de',
      localeDir: 'i18n/locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // TODO: change pwa data
  pwa: {
    name: 'WFE App Template Vue',
    themeColor: '#666666',
    msTileColor: '#000000',
    //
    appleMobileWebAppCapable: 'yes',
    // This option is used if you need to add a version to your icons and manifest, against browser’s cache.
    // This will append ?v=<pwa.assetsVersion> to the URLs of the icons and manifest.
    // assetsVersion: "",
    manifestOptions: {
      short_name: 'WFE Template',
      start_url: '.',
      display: 'fullscreen',
      description:
        'App Template with Vue and Core UI from Web Frontend Enterprise Team at Schwarz IT',
      icons: [
        {
          src: '/img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    iconPaths: {
      // null to exclude
      faviconSVG: null,
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
  },
};

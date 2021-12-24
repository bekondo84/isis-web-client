module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: false,
      includeLocales: false,
      enableBridge: true
    }
  },
    devServer: {
        port: 9002
    },
    pages: {
      index: {
        entry: 'src/main.js',
        title:'Isis ERP '
      }
    }
}

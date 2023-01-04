module.exports = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',

    domains: [
      {
        domain: 'erpel.com',
        defaultLocale: 'en',
      },
      {
        domain: 'erpel.de',
        defaultLocale: 'de',
        locales: ['at', 'ch'],
      },
    ],
  },
};

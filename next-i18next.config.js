module.exports = {
  i18n: {
    locales: ['en', 'at', 'ch', 'de'],
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

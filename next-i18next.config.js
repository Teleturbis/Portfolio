module.exports = {
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',

    domains: [
      {
        domain: 'kevinpoppe.com/en',
        defaultLocale: 'en',
      },
      {
        domain: 'kevinpoppe.com',
        defaultLocale: 'de',
        locales: ['at', 'ch'],
      },
    ],
  },
};

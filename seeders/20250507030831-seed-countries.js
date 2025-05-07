'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const countries = [
      { name: 'United States', code: 'US' },
      { name: 'Canada', code: 'CA' },
      { name: 'Mexico', code: 'MX' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'Germany', code: 'DE' },
      { name: 'France', code: 'FR' },
      { name: 'Italy', code: 'IT' },
      { name: 'Spain', code: 'ES' },
      { name: 'Japan', code: 'JP' },
      { name: 'China', code: 'CN' },
      { name: 'South Korea', code: 'KR' },
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'India', code: 'IN' },
      { name: 'Russia', code: 'RU' },
      { name: 'Netherlands', code: 'NL' },
      { name: 'Sweden', code: 'SE' },
      { name: 'Switzerland', code: 'CH' },
      { name: 'Norway', code: 'NO' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Argentina', code: 'AR' },
      { name: 'South Africa', code: 'ZA' },
      { name: 'New Zealand', code: 'NZ' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Portugal', code: 'PT' },
      { name: 'Austria', code: 'AT' },
      { name: 'Finland', code: 'FI' },
      { name: 'Greece', code: 'GR' },
      { name: 'Poland', code: 'PL' },
      { name: 'Turkey', code: 'TR' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Singapore', code: 'SG' },
      { name: 'Malaysia', code: 'MY' },
      { name: 'Thailand', code: 'TH' },
      { name: 'Vietnam', code: 'VN' },
      { name: 'Indonesia', code: 'ID' },
      { name: 'Philippines', code: 'PH' },
      { name: 'Israel', code: 'IL' },
      { name: 'Saudi Arabia', code: 'SA' },
      { name: 'United Arab Emirates', code: 'AE' },
      { name: 'Egypt', code: 'EG' },
      { name: 'Nigeria', code: 'NG' },
      { name: 'Kenya', code: 'KE' },
      { name: 'Colombia', code: 'CO' },
      { name: 'Chile', code: 'CL' },
      { name: 'Peru', code: 'PE' },
      { name: 'Venezuela', code: 'VE' }
    ];

    const timestamp = new Date();

    await queryInterface.bulkInsert(
      'countries',
      countries.map(c => ({
        name: c.name,
        code: c.code,
        created_at: timestamp,
        updated_at: timestamp
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('countries', null, {});
  }
};

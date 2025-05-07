'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const manufacturers = [
      'Hasbro',
      'Kenner',
      'Mattel',
      'NECA',
      'McFarlane Toys',
      'Bandai',
      'Takara Tomy',
      'Funko',
      'Playmates Toys',
      'JAKKS Pacific',
      'Mezco Toyz',
      'Diamond Select Toys',
      'Super7',
      'Toy Biz',
      'Medicom Toy',
      'Hot Toys',
      'Mego Corporation',
      'Spin Master',
      'Boss Fight Studio',
      'Hiya Toys',
      'S.H. Figuarts',
      'Storm Collectibles',
      'ThreeZero',
      'Good Smile Company',
      'Revoltech',
      'Bif Bang Pow!',
      'DSTLRY',
      'Lanard Toys',
      'Joy Toy',
      'Four Horsemen Studios',
      'Blue Box International',
      'Tomland',
      'Palitoy',
      'Ideal Toy Company',
      'Remco',
      'Toy Island',
      'Toynami',
      'Banpresto',
      'LJN',
      'Arco',
      'Excel Toys',
      'Sunbow',
      'Zica Toys',
      'Fresh Monkey Fiction',
      'Toyco',
      'Just Toys',
      'Figures Toy Company',
      'McToy',
      'Plastic Meatball'
    ];

    const timestamp = new Date();

    await queryInterface.bulkInsert(
      'manufacturers',
      manufacturers.map(name => ({
        name,
        created_at: timestamp,
        updated_at: timestamp
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('manufacturers', null, {});
  }
};

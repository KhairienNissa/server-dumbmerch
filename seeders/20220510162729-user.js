'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
     await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'cacakhairien@gmail.com',
          password:
            '$2b$10$eHoiJ8lWu1n9/es2pfHIt.U1Hx/ARhVdyxzgX4mGAsDkBdb6s21qm', //hahaha
          name: 'admin',
          status: 'admin',
        },
      ],
      {}
    );
  },




  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

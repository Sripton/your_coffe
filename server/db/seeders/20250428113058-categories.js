"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      "Categories",
      [
        {
          img: "cofe.png",
          alt: "coffe",
          title: "Кофе",
        },
        {
          img: "tea.png",
          alt: "tea",
          title: "Чай",
        },
        {
          img: "milk.png",
          alt: "milk",
          title: "Молочные коктейли",
        },
        {
          img: "mors.png",
          alt: "mors",
          title: "Морс",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

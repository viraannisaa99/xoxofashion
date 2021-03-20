module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      product_name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.BLOB("long"),
      }
    });
  
    return Product;
  };
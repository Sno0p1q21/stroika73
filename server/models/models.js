const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING, allowNull: false },
});

const ProductType = sequelize.define('product_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

module.exports = {
  User,
  Basket,
  Product,
  ProductType,
};

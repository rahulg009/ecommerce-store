const { Model } = require('sequelize');
const Sequelize = require('sequelize')

const sequelize = require('../util/database.js')
const product= sequelize.define('product',{
  id:{
    type:sequelize.Integer,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:sequelize.STRING,
  price:{
    type:sequelize.DOUBLE,
    allowNull:false
  },
  imageUrl:{
    type:sequelize.STRING,
    allowNull:false,
  },
  description:{
    type:sequelize.STRING,
    allowNull:false
  }

});
Model.exports=Product;
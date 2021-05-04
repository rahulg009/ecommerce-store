const Sequelize = require(sequelize);

const sequelize = new Sequelize('node-complete','root','rahul@99779900',{dialect:"mysql",host:"localhost"});

module.exports=sequelize;

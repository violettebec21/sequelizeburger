module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      // Giving the Burger model a name of type STRING
      burger_name: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 150]
            },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });
    
  return Burger;
};

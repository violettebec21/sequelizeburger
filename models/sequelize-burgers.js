module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // Giving the Burger model a name of type STRING
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [3, 150]
            // },
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });
    Burger.sync();

    return Burger;
};
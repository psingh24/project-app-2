module.exports = function(sequelize, DataTypes) {
    return sequelize.define("friends", {
        friends: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    });

    friends.belongsTo(user, {
        forgeignKey: {
            allowNull: false
        }
    });
    console.log(friends);

    // friends.associate = function(models) {
    //     friends.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     return friends;
    // };
};
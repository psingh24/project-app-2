module.exports = function(sequelize, DataTypes) {
    return sequelize.define("profile", {
        //    Needs to pull in user email, name **
        image: DataTypes.STRING,
        // let's pull in a friends array
        friends: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    });

    profile.belongsTo(user, {
        forgeignKey: {
            allowNull: false
        }
    });
    console.log(profile);

    // friends.associate = function(models) {
    //     friends.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     return friends;
    // };
};
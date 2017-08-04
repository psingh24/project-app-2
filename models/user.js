module.exports = function(sequelize, DataTypes) {
    return sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    user.hasMany(
        preferences, { forgeignKey: "preferences_id" },
        friends, { forgeignKey: "friends_id" }
    );

    // user.associate = function(models) {
    //     user.hasMany(models.preferences, models.friends, {
    //         onDelete: "cascade"
    //     });
    //     return user;
    // };
};
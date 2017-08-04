module.exports = function(sequelize, DataTypes) {
    return sequelize.define("preferences", {
        restaurants: DataTypes.STRING,
        drinks: DataTypes.STRING,
        events: DataTypes.STRING
    });

    preferences.belongsTo(user, {
        forgeignKey: "preferences_id"
    });

    // preferences.associate = function(models) {
    //     preferences.belongsTo(models.user, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     return preferences;
    // };
};
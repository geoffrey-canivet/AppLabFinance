module.exports = (sequelize, DataTypes) => {
    const Assurance = sequelize.define('Assurance', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Identifiant de l'assurance'"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: {
                    args: [1, 20]
                }
            }
        },
        data: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.00,
        }

    })
    return Assurance;
}
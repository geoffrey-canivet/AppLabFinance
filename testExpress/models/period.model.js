module.exports = (sequelize, DataTypes) => {
    const Period = sequelize.define('Period', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Id de la sous-catégorie"
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'Le mois doit être un entier.'
                },
                min: {
                    args: 1,
                    msg: 'Le mois doit être supérieur ou égal à 1.'
                },
                max: {
                    args: 12,
                    msg: 'Le mois doit être inférieur ou égal à 12.'
                }
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'L\'année doit être un entier.'
                },
                min: {
                    args: 1900,
                    msg: 'L\'année doit être supérieure ou égale à 1900.'
                },
                max: {
                    args: new Date().getFullYear(),
                    msg: 'L\'année ne peut pas dépasser l\'année en cours.'
                }
            }
        },
    })

    // JOINTURES
    Period.associate = (models) => {
        Period.hasMany(models.Transaction, {
            foreignKey: 'periodId',
            as: 'transactions'
        });
    };

    return Period;
}
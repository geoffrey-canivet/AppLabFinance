module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Id de la transaction"
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: {
                    msg: 'Le montant doit être un nombre valide.'
                },
                min: {
                    args: [0.0],
                    msg: 'Le montant ne peut pas être négatif.'
                }
            }
        },
        isExpense: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            validate: {
                isIn: {
                    args: [[true, false]],
                    msg: 'La valeur doit être soit true (vrai) soit false (faux).'
                }
            }
        },
        subcategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'SubCategories',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users', // Le nom de la table utilisateur
                key: 'id'
            }
        },
        periodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Periods', // Le nom de la table utilisateur
                key: 'id'
            }
        }
    })

    // JOINTURE
    Transaction.associate = (models) => {
        Transaction.belongsTo(models.SubCategory, {
            foreignKey: 'subcategoryId',
            as: 'subcategory' });

        Transaction.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });

        Transaction.belongsTo(models.Period, {
            foreignKey: 'periodId',
            as: 'period'
        });
    };

    return Transaction;
}
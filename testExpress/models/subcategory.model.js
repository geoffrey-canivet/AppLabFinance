module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define('SubCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Id de la sous-catégorie"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Le nom de la sous-catégorie ne peut pas etre vide"
                },
                len: {
                    args: [1, 20],
                    msg: "Le nom de la sous-catégorie ne doit pas depasser 20 caractères"
                }
            }
        },
        /*FOREIGN KEY*/
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id'
            }
        }
    })

    // JOINTURE
    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });

        SubCategory.hasMany(models.Transaction, {
            foreignKey: 'subcategoryId',
            as: 'transactions'
        });
    };


    return SubCategory;
}
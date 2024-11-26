module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Id de la catégorie"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Le nom de la catégorie ne peut pas etre vide"
                },
                len: {
                    args: [1, 20],
                    msg: "Le nom de la catégorie ne doit pas depasser 20 caractères"
                }
            }
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Fixes', 'Occasionnelles', 'Revenus'],
            defaultValue: 'Fixes',
                isIn: {
                args: [['Fixes', 'Occasionnelles', 'Revenus']],
                msg: 'Le role doit etre Fixes, Occasionnelles, Revenus'
            }
        }
    })

    // Jointure
    Category.associate = (models) => {
        Category.hasMany(models.SubCategory, {
            foreignKey: "categoryId",
            as: "subCategories"
        })
    }

    return Category;
}
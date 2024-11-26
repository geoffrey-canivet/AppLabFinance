module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: "Id de l'utilisateur"
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Le nom de l'utilisateur ne peut pas etre vide"
                },
                len: {
                    args: [1, 20],
                    msg: "Le nom de l'utilisateur ne doit pas depasser 20 caractères"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "L'email existe déja",
            },
            validate: {
                notEmpty: {
                    msg: "L'email ne peut pas etre vide"
                },
                isEmail: {
                    msg: "Format email non valide"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 100], // Longueur du mot de passe entre 8 et 100 caractères
                    msg: 'Le mot de passe doit contenir entre 8 et 100 caractères.'
                },
                /*customValidator(value) { // Utiliser un nom générique accepté par Sequelize
                    if (!/[A-Z]/.test(value)) {
                        throw new Error('Le mot de passe doit contenir au moins une lettre majuscule.');
                    }
                    if (!/[a-z]/.test(value)) {
                        throw new Error('Le mot de passe doit contenir au moins une lettre minuscule.');
                    }
                    if (!/[0-9]/.test(value)) {
                        throw new Error('Le mot de passe doit contenir au moins un chiffre.');
                    }
                    if (!/[^A-Za-z0-9]/.test(value)) {
                        throw new Error('Le mot de passe doit contenir au moins un caractère spécial.');
                    }
                }*/
            }
        },

    })

    // JOINTURES
    User.associate = (models) => {
        User.hasMany(models.Transaction, {
            foreignKey: 'userId',
            as: 'transactions'
        });
    };

    return User;
}
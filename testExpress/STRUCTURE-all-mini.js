/*
/project-name
│
├── /src
│   ├── /config
│   │   ├── db.js               # Connexion à la base de données
│   │   ├── env.js              # Chargement des variables d'environnement
│   │   ├── loggerConfig.js     # Configuration avancée du logger
│   │   └── swaggerConfig.js    # Configuration Swagger pour la documentation API
│   │
│   ├── /controllers
│   │   ├── userController.js   # Logique métier des utilisateurs
│   │   ├── authController.js   # Gestion de l'authentification
│   │   ├── healthController.js # Vérification du statut de l'API
│   │   └── index.js            # Exporte tous les contrôleurs
│   │
│   ├── /models
│   │   ├── userModel.js        # Schéma utilisateur
│   │   ├── sessionModel.js     # Gestion des sessions utilisateur
│   │   ├── logModel.js         # Journalisation des actions (audit logs)
│   │   └── index.js            # Regroupe tous les modèles
│   │
│   ├── /routes
│   │   ├── userRoutes.js       # Routes utilisateurs
│   │   ├── authRoutes.js       # Routes d'authentification
│   │   ├── healthRoutes.js     # Routes pour le monitoring (health check)
│   │   ├── apiRoutes.js        # Regroupe toutes les routes API
│   │   └── index.js            # Importation des routes principales
│   │
│   ├── /middlewares
│   │   ├── authMiddleware.js   # Middleware pour valider les tokens
│   │   ├── validateInput.js    # Validation des données utilisateur
│   │   ├── errorHandler.js     # Middleware global de gestion des erreurs
│   │   ├── rateLimiter.js      # Limitation du nombre de requêtes
│   │   ├── corsMiddleware.js   # Configuration CORS avancée
│   │   └── cacheMiddleware.js  # Middleware de mise en cache
│   │
│   ├── /services
│   │   ├── userService.js      # Gestion avancée des utilisateurs
│   │   ├── authService.js      # Gestion des tokens et hashing
│   │   ├── emailService.js     # Gestion des e-mails (SMTP ou API)
│   │   ├── paymentService.js   # Intégration de paiements (Stripe, PayPal)
│   │   ├── logService.js       # Service de journalisation
│   │   └── index.js            # Regroupe tous les services
│   │
│   ├── /utils
│   │   ├── logger.js           # Initialisation du logger (Winston ou Pino)
│   │   ├── jwtUtils.js         # Fonctions JWT
│   │   ├── encryption.js       # Hashing et cryptage
│   │   ├── dateUtils.js        # Manipulations de dates
│   │   ├── cacheUtils.js       # Gestion des caches
│   │   └── helpers.js          # Fonctions utilitaires
│   │
│   ├── /tests
│   │   ├── /unit               # Tests unitaires
│   │   │   ├── userService.test.js
│   │   │   ├── authService.test.js
│   │   │   └── utils.test.js
│   │   ├── /integration        # Tests d'intégration
│   │   │   ├── authRoutes.test.js
│   │   │   ├── userRoutes.test.js
│   │   │   └── database.test.js
│   │   └── /e2e                # Tests end-to-end (E2E) pour Cypress ou Puppeteer
│   │       ├── authFlow.e2e.js
│   │       └── userFlow.e2e.js
│   │
│   ├── /views                  # Templates front-end
│   │   ├── layout.ejs          # Layout de base
│   │   ├── home.ejs            # Page d'accueil
│   │   ├── error.ejs           # Page d'erreur
│   │   └── dashboard.ejs       # Tableau de bord utilisateur
│   │
│   ├── app.js                  # Configuration principale Express
│   ├── server.js               # Point d'entrée de l'application
│   ├── swagger.json            # Fichier Swagger pour la documentation API
│   └── index.js                # Alias pour importer app.js
│
├── /public                     # Ressources statiques (CSS, JS, images, etc.)
│   ├── /css
│   │   ├── styles.css
│   │   └── theme.css
│   ├── /js
│   │   └── scripts.js
│   ├── /images
│   │   ├── logo.png
│   │   └── banner.jpg
│   └── /uploads                # Fichiers téléchargés par les utilisateurs
│
├── /logs                       # Journaux d'exécution
│   ├── app.log
│   ├── error.log
│   └── audit.log               # Journaux d'audit pour la conformité
│
├── .github                     # Configurations CI/CD avec GitHub Actions
│   ├── workflows
│   │   └── ci-cd.yml           # Workflow CI/CD pour tests, builds, déploiements
│
├── .vscode                     # Configurations spécifiques à Visual Studio Code
│   ├── settings.json           # Paramètres spécifiques au projet
│   ├── launch.json             # Configuration du débogage
│   └── extensions.json         # Extensions recommandées
│
├── .env                        # Variables d'environnement
├── .env.example                # Exemple de configuration environnementale
├── .gitignore                  # Liste des fichiers/dossiers ignorés par Git
├── .prettierrc                 # Configuration Prettier
├── .eslintrc.js                # Configuration ESLint
├── jest.config.js              # Configuration de Jest pour les tests
├── tsconfig.json               # Configuration TypeScript (si TypeScript est utilisé)
├── Dockerfile                  # Fichier pour créer une image Docker
├── docker-compose.yml          # Orchestration Docker pour plusieurs services
├── package.json                # Dépendances et scripts npm
├── package-lock.json           # Verrouillage des dépendances
└── README.md                   # Documentation du projet
*/

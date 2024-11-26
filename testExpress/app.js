const express = require('express');
const path = require('path');
const router = require('./router')
const db = require('./models');

const app = express();
const PORT = 7006;

const initDb = async () => {
    try {
        await db.sequelize.sync({force: true}) // ecrase la db ou pas a chaque lancement du server
        console.log('Database Sequelize Connected')
    } catch (err) {
        console.error('Error connecting to sequelize database')
    }
}

initDb()

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(router)

app.listen(PORT, () => {
    console.log(`✅  App listen on → http://localhost:${PORT}/dashboard`);

})
const express = require('express');
const path = require('path');
const router = require('./router')

const app = express();
const PORT = 3001;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(router)

app.listen(PORT, () => {
    console.log(`✅  App listen on → http://localhost:${PORT}/dashboard`);

})
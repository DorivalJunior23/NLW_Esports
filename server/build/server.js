"use strict";
const express = require('express');
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, nome: "Anuncio1" },
        { id: 2, nome: "Anuncio2" }
    ]);
});
app.listen(3333);

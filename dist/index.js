"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = require('./src/route');
const app = express();
const PORT = process.env.PORT || 4444;
const cors = require('cors');
app.use(cors({
    origin: '*',
}));
app.use('/api', router);
app.listen(PORT, () => {
    console.log(PORT);
});

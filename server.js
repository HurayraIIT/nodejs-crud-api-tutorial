import express from 'express';
import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({message: "Hello"}));
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});
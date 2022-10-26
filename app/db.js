const { Pool, Client } = require("pg");
const client = new Client({
	user: "postgres",
	host: "banco-1",
	database: "docker",
	password: "postgres",
	port: "5432",
});

module.exports = client;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'controle_produtos',
    password: '1234',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}
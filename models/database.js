const pg = require('pg');
const fs = require('fs');

//const database = require('./database.sql').toString();

const databaseSql = fs.readFileSync('models/database.sql').toString();

const connectionString = process.env.DATABASE_URL || 'postgres://ag7949:6n9id9en@pgserver.mah.se:5432/ag7949';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(databaseSql, (err, res) => {
    done();
    if (err) {
        console.log(err);
    }
});
query.on('end', () => { client.end(); });
const { MongoClient } = require('mongodb');
const config = require("../../config.json");
const client = new MongoClient(process.env.MONGOPATH || config.mongoPath);

module.exports = async () => {
    await client.connect()
    return client
}
